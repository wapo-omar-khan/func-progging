describe ('a functional programming lesson', () => {
  // placeholder
  const _ = {}

  it ('has the form of a test file for you to experiment with', () => {
    // some try-it-yourself sections will be included
    // those sections will be marked for skipping
    // replace the _ with your work and remove the x from xit to include that test case in the flow to validate it
  })

  it ('covers the typing notation used', () => {
    // javascript is softly+dynamically typed
    // we will annotate types manually to guide you
    //   the arrow ( -> ) denotes a function that takes what's on the left as argument and on the right as output
    //   the letters preceded by an apostrophe ( 'a ) denotes a generic
    //     each letter is the same type as all other instances of the same letter within that annotation
    //     they stand for the analogous greek letter
    //   the asterisk ( * ) denotes separation between elements within a tuple type
  })

  it ('covers function declarations', () => {
    // javascript has multiple ways to define functions

    // longhand named function
    // 'a -> 'a
    function identity1 (x) {
      return x
    }
    expect (identity1 (1)).toEqual (1)

    // longhand anonymous function
    // 'a -> 'a
    const identity2 = function (x) {
      return x
    }
    expect (identity2 (1)).toEqual (1)

    // shorthand anonymous function (arrow notation)
    // 'a -> 'a
    const identity3 = (x) => {
      return x
    }
    expect (identity3 (1)).toEqual (1)

    // there are some javascript-specific differences between them
    // all three ways are equal for the purposes of this lesson
    // we will use arrow notation for this lesson for its lightness

    // if there is exactly one argument, the parentheses may be omitted
    // 'a -> 'a
    const identity4 = x => {
      return x
    }
    expect (identity4 (1)).toEqual (1)

    // if the body is only a single expression that is returned, the braces and return may be omitted
    // 'a -> 'a
    const identity5 = (x) => x
    expect (identity5 (1)).toEqual (1)

    // both syntactic sugars may be combined together
    // 'a -> 'a
    const identity6 = x => x
    expect (identity6 (1)).toEqual (1)
  })

  xit ('includes an exercise to write some functions', () => {
    // add 3
    // num -> num
    const add3 = _
    expect (add3 (1)).toEqual (4)

    // divide by 4
    // num -> num
    const divideby4 = _
    expect (divideby4 (4)).toEqual (1)
  })

  it ('covers anonymous functions', () => {
    // technically we've already used some anonymous functions in the previous section
    //   though assigning it to a variable effectively gives it a name

    // anonymous functions can be used inline
    // this is helpful in cases where a function is simple and is expected to be used only once

    // num
    const ans = (x => x + 3) (3)
    expect (ans).toEqual (6)
  })

  xit ('includes an exercise to write some anonymous functions', () => {
    // add 3
    expect ((_) (1)).toEqual (4)

    // divide by 4
    expect ((_) (4)).toEqual (1)
  })

  it ('covers first-class functions', () => {
    // as previously shown with the anonymous functions, variables can be assigned to functions and be used normally
    // this property is called first-class functions, meaning functions are first-class citizens of the language, like other data types

    // 'a -> 'a
    const identity = x => x
    expect (identity (1)).toEqual (1)

    // 'a -> 'a
    const f = identity
    expect (f (1)).toEqual (1)
  })

  xit ('includes an exercise to use some functions first-class', () => {
    // add 5
    // num -> num
    const add5 = _
    expect (add5 (5)).toEqual (10)

    // num -> num
    const f = _
    expect (f (5)).toEqual (10)
  })

  it ('covers free variables', () => {
    // functions can reference variables that are visible within the defining scope
    // these references are called free variables, since they are not defined within the function definition
    // these references are maintained no matter where the function is passed

    // num
    const x = 1

    // x is a free variable of add1
    // num -> num
    const add1 = y => x + y
    expect (add1 (2)).toEqual (3)
  })

  xit ('includes an exercise to use free variables', () => {
    // num
    const x = 7

    // string -> string
    const append7 = _
    expect (append7 ('str')).toEqual ('str7')
  })

  it ('covers mutability', () => {
    // because functions maintain references to free variables instead of creating a copy,
    //   mutating those external variables will affect the function

    // num
    var x = 1

    // x is a free variable of add1
    // num -> num
    const add1 = y => x + y
    expect (add1 (2)).toEqual (3)

    // num
    x = 3
    // add1 no longer adds 1
    expect (add1 (2)).toEqual (5)

    // mutation is discouraged as it makes code more difficult to prove,
    //   so variables are typically declared constant by default
    // a new variable can be declared whenever a new value is required anyways
  })

  xit ('includes an exercise to use mutability', () => {
    // num
    var x = 1

    // divide by x
    // num -> num
    const divide_by_x = _
    expect (divide_by_x (10)).toEqual (10)

    x = 3
    expect (divide_by_x (12)).toEqual (4)

    x = 1
    expect (divide_by_x (10)).toEqual (10)
  })

  it ('covers purity', () => {
    // because of the potential dangers of mutation changing functions that have been passed around,
    //   it is important to establish a guarantee that the function will work as intended
    // a function that always returns the same result for any given input and causes no state mutation is pure

    // this also lends security to concurrent and distributed computing,
    //   since synchronization does not need to be managed as granularly

    // there are some advantages to impurity and mutation, but they should be included carefully
  })

  it ('covers recursion', () => {
    // because mutation is discouraged, looping is as well,
    //   since if all variables are constant, loop conditions will never change
    // instead, recursion is preferred for iteration

    // num array
    const arr = [0, 1, 2, 3, 4]

    // (num * num array) -> num
    const sum_array = i => arr =>
      i < arr.length
      ? arr[i] + sum_array (i + 1) (arr)
      : 0
    expect (sum_array (0) (arr)).toEqual (10)

    // recursion has the benefit of isolating each case from each other as separate invocations
    // in combination with purity, this means that you only need to consider the arguments for the current invocation when debugging
  })

  xit ('includes an exercise to use recursion', () => {
    // calculate the factorial
    // num -> num
    const factorial = _
    expect (factorial (5)).toEqual (120)
  })

  it ('covers nested functions', () => {
    // nested functions are functions declared within another function and has visibility of that scope

    // num
    const x = 1
    // num -> num
    const f = y => {
      // num -> num
      const add = z => x + y + z
      return add (2)
    }
    expect (f (3)).toEqual (6)
  })

  it ('covers state passing', () => {
    // because there is no mutation, state is handled differently
    // state is generally managed by passing an updated function argument to the next call
    //   this is similar to declaring a new variable when normally one would be mutated
    // because old state is not mutated, this gives you time travel for free

    // num array
    const arr = [0, 1, 2, 3, 4]

    // the sum argument
    // (num * num * num array) -> num
    const sum_array = sum => i => arr =>
      i < arr.length
      ? sum_array (sum + arr[i]) (i + 1) (arr)
      : sum
    expect (sum_array (0) (0) (arr)).toEqual (10)
  })

  xit ('includes an exercise to use state passing', () => {
    // object
    const state1 = {}

    // add (a: 1) to state
    // when shorthand returning an object from an arrow function in javascript, you need to wrap it in parentheses
    // object -> object
    const add_a = _
    // object
    const state2 = add_a (state1)
    expect (state1).toEqual ({})
    expect (state2).toEqual ({a: 1})

    // add (b: 2) to state
    // use the spread operator {...x}
    // when shorthand returning an object from an arrow function in javascript, you need to wrap it in parentheses
    // object -> object
    const add_b = _
    // object
    const state3 = add_b (state2)
    expect (state1).toEqual ({})
    expect (state2).toEqual ({a: 1})
    expect (state3).toEqual ({a: 1, b: 2})

    // time travel!
    // object
    const state4 = add_b (state1)
    expect (state1).toEqual ({})
    expect (state2).toEqual ({a: 1})
    expect (state3).toEqual ({a: 1, b: 2})
    expect (state4).toEqual ({b: 2})
  })

  it ('covers higher-order functions', () => {
    // because functions are first-class citizens, they can also be passed to and returned from other functions
    // functions that pass or return a function are called higher-order functions

    // 'a -> 'a
    const identity = x => x
    expect (identity (1)).toEqual (1)

    // 'a -> 'a
    const identity2 = identity (identity)
    expect (identity2 (1)).toEqual (1)
  })

  xit ('includes an exercise to use higher-order functions', () => {
    // takes a function and passes 3 to it and returns the addition function if the result is odd and the subtraction function otherwise
    const f = _
    expect (f (x => x - 2) (1) (2)).toEqual (3)
    expect (f (x => x - 3) (1) (2)).toEqual (-1)
  })

  it ('covers currying', () => {
    // curried functions are a use case of higher-order functions and nested functions
    // currying is the conversion of a function with multiple arguments into a function that takes a single argument and
    //   returns a function to take the next argument, with the function taking the final argument evaluating and returning the result

    // a normal tupled function
    // (num * num) -> num
    const tupled_add = (x, y) => x + y
    expect (tupled_add (1, 2)).toEqual (3)

    // the curried version
    // num -> num -> num
    const curried_add = x => y => x + y
    expect (curried_add (1) (2)).toEqual (3)

    // a normal tupled function
    // (num * num * num) -> num
    const tupled_add3 = (x, y, z) => x + y + z
    expect (tupled_add3 (1, 2, 3)).toEqual (6)

    // the curried version
    // num -> num -> num -> num
    const curried_add3 = x => y => z => x + y + z
    expect (curried_add3 (1) (2) (3)).toEqual (6)

    // notice the differences in typing and invocation
    // one of the benefits of currying is that all functions take exactly one argument

    // functions can also be written to currify and uncurrify functions

    // (('a * 'b) -> 'c) -> 'a -> 'b -> 'c
    const currify = f => x => y => f (x, y)
    expect (currify (tupled_add) (1) (2)).toEqual (3)

    // ('a -> 'b -> 'c) -> ('a * 'b) -> 'c
    const uncurrify = f => (x, y) => f (x) (y)
    expect (uncurrify (curried_add) (1, 2)).toEqual (3)

    // (('a * 'b * 'c) -> 'd) -> 'a -> 'b -> 'c -> 'd
    const currify3 = f => x => y => z => f (x, y, z)
    expect (currify3 (tupled_add3) (1) (2) (3)).toEqual (6)

    // ('a -> 'b -> 'c) -> ('a * 'b) -> 'c
    const uncurrify3 = f => (x, y, z) => f (x) (y) (z)
    expect (uncurrify3 (curried_add3) (1, 2, 3)).toEqual (6)
  })

  xit ('includes an exercise to write curried functions', () => {
    // multiply the numbers together
    // num -> num -> num
    const times = _
    expect (times (3) (4)).toEqual (12)

    // divide the numbers
    // num -> num -> num
    const divide = _
    expect (divide (12) (3)).toEqual (4)
  })

  it ('covers partial application', () => {
    // partial application is declaring a new function that supplies some of the arguments to another argument
    // it's normally done by explicitly declaring a new function that passes through the partially applied arguments

    // a normal tupled function
    // (num * num) -> num
    const tupled_add = (x, y) => x + y
    expect (tupled_add (1, 2)).toEqual (3)

    // num -> num
    const tupled_add1 = y => tupled_add (1, y)
    expect (tupled_add1 (2)).toEqual (3)

    // the curried version
    // num -> num -> num
    const curried_add = x => y => x + y
    expect (curried_add (1) (2)).toEqual (3)

    // num -> num
    const curried_add1 = y => curried_add (1) (y)
    expect (curried_add1 (2)).toEqual (3)
  })

  it ('covers point-free form', () => {
    // currying allows for a better way to do partial application,
    //   without declaring a new function or explicitly invoking the original function
    // the partially applied arguments can be supplied and the function returned can be stored and used

    // num -> num -> num
    const curried_add = x => y => x + y
    expect (curried_add (1) (2)).toEqual (3)

    // num -> num
    const curried_add1 = curried_add (1)
    expect (curried_add1 (2)).toEqual (3)
  })

  xit ('includes an exercise to use point-free form', () => {
    // multiply the numbers
    // num -> num -> num
    const times = _

    // multiply the number by 3
    // num -> num
    const times3 = _
    expect (times3 (4)).toEqual (12)
  })

  it ('reminds you that partially applied functions can be used like any other function', () => {
    // num -> num -> num
    const add = x => y => x + y

    // num -> num
    const add3 = add (3)

    // 'a -> 'a
    const identity = x => x

    expect (identity (add3) (4)).toEqual (7)
    expect (identity (add (3)) (4)).toEqual (7)
  })

  it ('covers function composition', () => {
    // function composition is creating a new function by combining two functions together
    //   by taking the output of one and immediately using it as the input of another
    // this is normally available as an operator in functional languages
    //   ocaml: <<
    //     (f << g) (x) = f (g (x))
    //   haskell: .
    //     (f . g) (x) = f (g (x))
    // the generally more readable form is reverse function composition that applies the functions in reverse
    //   ocaml: >>
    //     (f >> g) (x) = g (f (x))
    // typically people conflate reverse function composition with function composition

    // ('a -> 'b) -> ('c -> 'a) -> ('c -> 'a)
    const compose = f => g => x => f (g (x))
    // num -> num
    const add1 = x => x + 1
    // num -> num
    const times2 = x => x * 2
    // num -> num
    const times2_add1 = compose (add1) (times2)
    expect (times2_add1 (3)).toEqual (7)
  })

  xit ('includes an exercise to use function composition', () => {
    // add 3
    // num -> num
    const add3 = _

    // multiply by 3
    // num -> num
    const times3 = _

    // ('a -> 'b) -> ('c -> 'a) -> ('c -> 'a)
    const compose = f => g => x => f (g (x))
    // compose them to make a function that adds 3 then multiplies by 3
    const add3_times3 = _
    expect (add3_times3 (3)).toEqual (18)
  })

  it ('covers argument swapping', () => {
    // this swaps the order of the first two arguments to the function
    // ('a -> 'b -> 'c) -> 'b -> 'a -> 'c
    const swap = f => x => y => f (y) (x)

    // num -> num -> num
    const sub = x => y => x - y
    expect (sub (1) (2)).toEqual (-1)
    const swapped_sub = swap (sub)
    expect (swapped_sub (1) (2)).toEqual (1)

    // because of currying, this can also handle functions with more than 2 arguments

    // num -> num -> num -> num -> num
    const big_sub = a => b => c => d => a - b - c - d
    expect (big_sub (10) (1) (2) (3)).toEqual (4)
    // num -> num -> num -> num -> num
    const swapped_big_sub = swap (big_sub)
    expect (swapped_big_sub (1) (10) (2) (3)).toEqual (4)
  })

  describe ('various useful and common collection functions', () => {
    // in the functional languages, the linked list is the basic data structure instead of arrays
    // linked lists are recursive and do not require external information like an index to be traversed
    // i'd prefer to implement the functions immutably, but it's inconvenient with arrays instead
    // also, note that all of the functions create a new copy of the collection instead of mutating it

    it ('covers fold', () => {
      // fold is the most basic collection function
      // almost all other collection functions can be derived from fold

      // fold sums the collection
      // ('a -> 'b -> 'a) -> 'a -> 'b array -> 'a
      const fold = f => a => arr => {
        var ans = a
        for (var i = 0; i < arr.length; i++)
          ans = f (ans) (arr[i])
        return ans
      }

      // num -> num -> num
      const add = x => y => x + y
      // num array
      const arr = [0, 1, 2, 3, 4]
      expect (fold (add) (0) (arr)).toEqual (10)

      // javascript arrays include this tupled as the .reduce method
    })

    xit ('includes an exercise to use fold', () => {
      // ('a -> 'b -> 'a) -> 'a -> 'b array -> 'a
      const fold = f => a => arr => arr.reduce ((a, h) => f (a) (h), a)

      // num array
      const arr = [1, 2, 3, 4, 5]
      // calculate the product of the array
      expect (fold (_) (_) (arr)).toEqual (120)
    })

    // for my convenience
    // ('a -> 'b -> 'a) -> 'a -> 'b array -> 'a
    const fold = f => a => arr => {
      var ans = a
      for (var i = 0; i < arr.length; i++)
        ans = f (ans) (arr[i])
      return ans
    }

    it ('covers map', () => {
      // map transforms each element
      // ('a -> 'b) -> 'a array -> 'b array
      const map = f => fold (a => h => [...a, f (h)]) ([])

      // num -> num -> num
      const add = x => y => x + y
      // num array
      const arr = [0, 1, 2, 3, 4]
      expect (map (add (1)) (arr)).toEqual ([1, 2, 3, 4, 5])

      // javascript arrays include this tupled as the .map method
    })

    xit ('includes an exercise to use map', () => {
      // ('a -> 'b) -> 'a array -> 'b array
      const map = f => arr => arr.map (f)

      // num array
      const arr = [1, 2, 3, 4, 5]
      // multiply each element by 3
      expect (map (_) (arr)).toEqual (120)
    })

    it ('covers filter', () => {
      // filter keeps only elements that pass the predicate
      // ('a -> bool) -> 'a array -> 'a array
      const filter = f => fold (a => h => f (h) ? [...a, h] : a) ([])

      // num -> bool
      const is_even = x => x % 2 == 0
      // num array
      const arr = [0, 1, 2, 3, 4]
      expect (filter (is_even) (arr)).toEqual ([0, 2, 4])

      // javascript arrays include this tupled as the .filter method
    })

    xit ('includes an exercise to use filter', () => {
      // ('a -> 'b) -> 'a array -> 'b array
      const filter = f => arr => arr.filter (f)

      // num array
      const arr = [1, 2, 3, 4, 5]
      // keep only the odd elements
      expect (filter (_) (arr)).toEqual ([1, 3, 5])
    })

    it ('covers for_all', () => {
      // for_all returns if all elements pass the predicate
      // ('a -> bool) -> 'a list -> bool
      const for_all = f => fold (a => h => a && f (h)) (true)

      // num -> bool
      const is_even = x => x % 2 == 0
      // num array
      const arr = [0, 1, 2, 3, 4]
      expect (for_all (is_even) (arr)).toEqual (false)

      // javascript arrays include this tupled as the .every method
    })

    xit ('includes an exercise to use for_all', () => {
      // ('a -> bool) -> 'a array -> bool
      const for_all = f => arr => arr.every (f)

      // num array
      const arr = [1, 2, 3, 4, 5]
      // check if all elements are greater than 0
      expect (for_all (_) (arr)).toEqual (true)
    })

    it ('covers exists', () => {
      // exists returns if at least one element passes the predicate
      // ('a -> bool) -> 'a list -> bool
      const exists = f => fold (a => h => a || f (h)) (false)

      // num -> bool
      const is_even = x => x % 2 == 0
      // num array
      const arr = [0, 1, 2, 3, 4]
      expect (exists (is_even) (arr)).toEqual (true)

      // javascript arrays include this tupled as the .some method
    })

    xit ('includes an exercise to use exists', () => {
      // ('a -> bool) -> 'a array -> bool
      const exists = f => arr => arr.some (f)

      // num array
      const arr = [1, 2, 3, 4, 5]
      // check if any elements are greater than 0
      expect (exists (_) (arr)).toEqual (true)
    })

    it ('covers find', () => {
      // find returns the first element that passes the predicate
      // ('a -> bool) -> 'a list -> 'a
      const find = f => fold (a => h => a === undefined ? f (h) ? h : undefined : a) (undefined)

      // num -> bool
      const is_even = x => x % 2 == 0
      // num array
      const arr = [0, 1, 2, 3, 4]
      expect (find (is_even) (arr)).toEqual (0)

      // javascript arrays include this tupled as the .find method
    })

    xit ('includes an exercise to use exists', () => {
      // ('a -> bool) -> 'a list -> 'a
      const find = f => arr => arr.find (f)

      // num array
      const arr = [1, 2, 3, 4, 5]
      // find the first element greater than 3
      expect (find (_) (arr)).toEqual (4)
    })

    it ('reminds you that you can have collections of functions', () => {
      // ('a -> bool) -> 'a array -> bool
      const for_all = f => arr => arr.every (f)

      // ('a -> 'b) -> 'a array -> 'b array
      const filter = f => arr => arr.filter (f)

      // (num -> bool) array
      const filters = [
        x => x > 10,
        x => x % 2 == 0,
        x => x / 12 != 1,
      ]

      // num array
      const values = [3, 7, 10, 11, 12, 14, 15, 17, 18]

      expect (filter (x => for_all (f => f (x)) (filters)) (values)).toEqual ([14, 18])
    })
  })

  it ('covers javascript idiosyncracies', () => {
    // specific to javascript, longhand functions that use self-reference (the this keyword)
    //   have it bound to the object from which it was invoked as a method
    // this means that if a function uses self-reference, it may be unsafe to pass around
    //   without first calling the function's bind method on the object first
  })

  it ('covers tail call optimization', () => {
    // some concerns about stack overflow errors when recursing deeply can be alleviated by the tail call compiler optimization
    // when the last action in a function is invoking another function,
    //   the stack frame can be recycled for the new invocation instead of having to allocate another frame on top of it
    // for example: this allows looping over an array to consume only a constant stack size
    // the second sum_array example is one example of this
    //   in the continuation case, invoking itself is the last action it does, since all arguments must be evaluated first

    // at the current time, tail call optimization is not implemented in javascript
  })

  it ('explains the test file structure', () => {
    // have you noticed that this test framework uses nested higher-order functions?
  })
})
