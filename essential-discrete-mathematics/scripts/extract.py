#!/usr/bin/env python

import sys
import re
import textwrap
from bs4 import BeautifulSoup

input = open(sys.argv[1])
soup = BeautifulSoup(input, 'html.parser')

main = soup.find(id='sbo-rt-content')

main_content = soup.select('#sbo-rt-content > .annotator-wrapper')[0]
# print(main_content[0])
for child in main_content.children:
  if child.name:
    ctype = child.name + '.' + child.attrs['class'][0]
    print('####' + ctype + '####')
    print(child.prettify())

paragraphs = main.find_all('p')
rst = ''
prefix = ''
for p in paragraphs:

    pclass = p.attrs['class'][0]
    # print('class=' + pclass)
    # print(p.string)
    # if not (pclass == 'fm-title' or pclass == 'h4' or pclass == 'h1'):
    #     if p.i:
    #         p.i.replace_with('*' + p.i.string + '*')
    #     if p.b:
    #         p.b.replace_with('**' + p.b.string + '**')

    content = re.sub('\s+', ' ', p.get_text()).strip()
    n = len(content)
    # print(content)
    # classes: fm-title, h4, indent, noindent, bull, lefta, indentta
    if pclass == 'fm-title' or pclass == 'chaptitle':
        rst += prefix + '='*n + '\n' + content + '\n' + '='*n + '\n\n'
        prefix = ''
    elif pclass == 'h1':
        rst += prefix + content + '\n' + '-'*n + '\n\n'
        prefix = ''
    elif pclass == 'h2':
        rst += prefix + content + '\n' + '`'*n + '\n\n'
        prefix = ''
    elif pclass == 'h3':
        rst += prefix + content + '\n' + '^'*n + '\n\n'
        prefix = ''
    elif pclass == 'h4':
        rst += prefix + content + '\n' + '-'*n + '\n\n'
        prefix = ''
    elif pclass == 'indent':
        rst += prefix + "\n".join(textwrap.wrap(content, 79)) + '\n\n'
        prefix = ''
    elif pclass == 'bull' or pclass == 'lefta' or pclass == 'indentta':
        rst += '- ' + content + '\n'
        prefix = '\n'
    elif pclass == 'image':
        img = p.find('img')
        rst += '\n.. figure:: _static/' + \
            re.sub('.+\/', '', img.attrs['src']) + '\n\n'
    elif pclass == 'figcaption':
        rst += ' '*3 + content + '\n\n'
    else:
        rst += "\n".join(textwrap.wrap(content, 79)) + '\n'
        prefix = '\n'

# print(rst)
input.close()
