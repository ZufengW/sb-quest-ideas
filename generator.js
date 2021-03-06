// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generator.js

  var gen_data = {};
  var curr_type='main';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// EXTRA FUNCTION FOR DISPLAYING in the html element with id="output"

  function more_random(z) {
    var a=document.getElementById("output"),b=parseInt(a.rows);
    if(b<1)b=1;
    b=generate_list(z,b);
    a.value=b.join("\n");
  }
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// NEW FUNCTION for the drop-down menu to switch between quests and everything else
// i.e.  onchange="select_menu(this.value);"      where this.value is a string

  function select_menu(val) {
    if(val[0]=='{') {                          // if any quest type was selected
      curr_type='main';
      //alert("!curr_type = "+curr_type);      // use alerts for testing purposes
    } else {                                   // something from other
      curr_type=val;
    }
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// NEW FUNCTION for changing the content of a single-value linking table
// type is the 'name' of the table, val is new 'value' to put (both string)

  function change_content(type,val) {
    gen_data[type][0] = val;
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generator function

  function generate_text (type) {
    var list; if (list = gen_data[type]) {
      var string; if (string = select_from(list)) {
        return expand_tokens(string);
      }
    }
    return '<'+type+'>';  // more informative, returns <type> if type not exist
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// generate multiple

  function generate_list (type, n_of) {
    var list = [];

    var i; for (i = 0; i < n_of; i++) {
      list.push(generate_text(type));
    }
    return list;
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// select from list

  function select_from (list) {
    if (list.constructor == Array) {
      return select_from_array(list);
    } else {
      return select_from_table(list);
    }
  }
  function select_from_array (list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  function select_from_table (list) {
    var len; if (len = scale_table(list)) {
      var idx = Math.floor(Math.random() * len) + 1;

      var key; for (key in list) {
        var r = key_range(key);
        if (idx >= r[0] && idx <= r[1]) { return list[key]; }
      }
    }
    return '<table error>'; // means something wrong with the table
  }
  function scale_table (list) {
    var len = 0;

    var key; for (key in list) {
      var r = key_range(key);
      if (r[1] > len) { len = r[1]; }
    }
    return len;
  }
  function key_range (key) {
    var match; if (match = /(\d+)-00/.exec(key)) {
      return [ parseInt(match[1]), 100 ];
    } else if (match = /(\d+)-(\d+)/.exec(key)) {
      return [ parseInt(match[1]), parseInt(match[2]) ];
    } else if (key == '00') {
      return [ 100, 100 ];
    } else {
      return [ parseInt(key), parseInt(key) ];
    }
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// expand {token} in string

  function expand_tokens (string) {
    var match; while (match = /{(\w+)}/.exec(string)) {
      var token = match[1];

      var repl; if (repl = generate_text(token)) {
        string = string.replace('{'+token+'}',repl);
      } else {
        string = string.replace('{'+token+'}',token);
      }
    }
    return string;
  }

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
