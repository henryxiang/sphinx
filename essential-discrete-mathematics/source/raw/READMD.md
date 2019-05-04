# Essentials of Discrete Mathematics

---

## Logical Thinking

### Formal Logic

- Formalism: mathematical notations
- Logical proposition (aka statement): a declarative sentence that is either `true` or `false`
  _Note: Not all declarative sentences are proposition (statement), e.g., having variable, self-referential._
- Logical connectives: `and`, `or`, `not`, `implies`, and `if and only if`
- Truth table: defines the results of logical connectives
- Contrapositive: !q -> !p is contrapositive of p -> q
- Converse: q -> p is converse of p -> q
- Strong statement: "P is stronger than Q" means P -> Q is always true but not conversely
- Sufficient condition: if p -> q, then p is a sufficient condition of q
- Necessary condition: if q -> p (or !p -> !q), then p is a necessary condition of q
- NAND (#): p # q <=> !(p & q)
  - p & q <=> (p # q) # (p # q)
  - p | q <=> (p # p) # (q # q)
  - p -> q <=> p # (q # q)

### Propositional Logic

- Tautology: a statement whose truth table is always `true`
  - modus ponens: (p -> q) & p => q
  - modus tollens: (p -> q) & !q => !p
- Contradiction: a statement whose truth table is always `false`
- Contingency: a statement is neither tautology nor contradiction,
  i.e. a statement whose truth table contains both `true` and `false`

### Logical Equivalence

- Double negation: !!p <=> p
- Implication: !p | q <=> p -> q
- De Morgan's Laws:
  - !(p & q) <=> !p | !q
  - !(p | q) <=> !p & !q
- Commutativity:
  - p | q <=> q | p
  - p & q <=> q & p
- Associativity:
  - p & (q & r) <=> (p & q) & r
  - p | (q | r) <=> (p | q) | r

### Inference Rules

- Modus ponens: (p -> q) & p => q
- Modus tollens: (p -> q) & !q => !p
- Simplification: p & q => p
- Addition: p => p | q

### Predicate Logic

- Predicate: a declarative sentence whose T/F value depends on one or more variables
  - Notations: P(x), Q(x, y)
  - Domain (or universe) of predicate variable(s)
- Quantifier
  - Universal quantifier: "for all" e.g. P(x) is true for all x
  - Existential quantifier: "there exists" e.g. there exists x such that P(x) is true, or P(x) is true for some x
  - Quantified statement
- Negation of quantified statement
  - ![for all x P(x)] <=> there exists x s.t. [!P(x)], "not for all" means "there is some" and vise versa
  - ![there exists x s.t. P(x)] <=> for all x [!P(x)], "not exists" means "for all not" and vise versa
- Two common constructions
  - All ** are **. e.g. for all x, [P(x) -> Q(x)]; for all x, if x is P, then x is Q.
  - There is a ** that is **. e.g. Exists(x), [P(x) -> Q(x)]; there is some x such that x is P and x is Q

### Logic in Mathematics

- Definition: a statement that stipulates the meaning of a new term, symbol, or object
- Postulate (aka axiom)
- Theorem
- Proof
- Lemma, proposition, corollary
- Counterexample: For all x, P(x), counterexample: Exists(x) !P(x)

### Methods of Proof

- Direct proof: To prove A => C, A => B1 => B2 ... => Bn => C
- Proof by contraposition: P(x) => Q(x), prove !Q(x) => !P(x)
- Proof by contradiction: !A => B1 => B2 ... => Bn => `false`, `true` => !Bn ...=> !B2 => !B1 => A, If !A is `false`, then A

---

## Relational Thinking
