/*
===============================================================================
| #  | Category / Operator Type            | Associativity   | Operators / Examples                                   | Notes                          |
|----|-------------------------------------|-----------------|--------------------------------------------------------|--------------------------------|
| 18 | Grouping                            | n/a             | (x)                                                    | Forces evaluation order [1]    |
| 17 | Access & Call                       | left-to-right   | x.y , x?.y , x[y] , new x(y) , x(y) , import(x)        | Member, optional chain [2–4]   |
| 16 | new (without args)                  | n/a             | new x                                                  | Constructor w/o args           |
| 15 | Postfix                             | n/a             | x++ , x--                                              | Postfix inc/dec [5]            |
| 14 | Prefix / Unary                      | n/a             | ++x , --x , !x , ~x , +x , -x , typeof x , void x ,    | Unary operations [6–7]         |
|    |                                     |                 | delete x , await x                                     |                                |
| 13 | Exponentiation                      | right-to-left   | x ** y                                                 | Exponentiation [8]             |
| 12 | Multiplicative                      | left-to-right   | x * y , x / y , x % y                                  | Multiply / divide / remainder  |
| 11 | Additive                            | left-to-right   | x + y , x - y                                          | Addition / subtraction         |
| 10 | Bitwise Shift                       | left-to-right   | x << y , x >> y , x >>> y                              | Shift bits                     |
|  9 | Relational                          | left-to-right   | < , <= , > , >= , in , instanceof                      | Comparison / membership        |
|  8 | Equality                            | left-to-right   | == , != , === , !==                                    | Loose & strict equality        |
|  7 | Bitwise AND                         | left-to-right   | &                                                      | Bitwise AND                    |
|  6 | Bitwise XOR                         | left-to-right   | ^                                                      | Bitwise XOR                    |
|  5 | Bitwise OR                          | left-to-right   | |                                                      | Bitwise OR                     |
|  4 | Logical AND                         | left-to-right   | &&                                                     | Boolean AND                    |
|  3 | Logical OR / Nullish                | left-to-right   | || , ??                                                | OR / Nullish coalescing [9]    |
|  2 | Assignment & Miscellaneous          | right-to-left   | = , += , -= , **= , *= , /= , %= , <<= , >>= , >>>= ,  | Assignment family [10]         |
|    |                                     |                 | &= , ^= , |= , &&= , ||= , ??=                         |                                |
|    | Conditional / Arrow / Spread        | right-to-left   | x ? y : z , x => y , yield x , yield* x , ...x         | Ternary, arrow, yield, spread  |
|  1 | Comma                               | left-to-right   | x, y                                                   | Evaluate left, return right    |
===============================================================================

Notes:
[1] Parentheses change evaluation order.
[2] Member access binds tightly (a.b.c()).
[3] Computed property uses expression before access.
[4] new f(a) ≠ new f — precedence difference.
[5] Postfix returns old value; prefix returns new.
[6] Prefix applies before value use.
[7] delete works only on object props, not let/const.
[8] Exponentiation is right-assoc: 2 ** 3 ** 2 == 2 ** (3 ** 2).
[9] ?? only triggers on null/undefined.
[10] Assignments are right-assoc: a = b = c assigns c to both.
===============================================================================
*/
