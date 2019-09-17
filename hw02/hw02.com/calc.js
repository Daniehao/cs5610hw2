{
  var STATE = 0;
  {
    // figure zoom
    document.getElementById("one").onclick = function () {
      number("1");
    };
    document.getElementById("two").onclick = function () {
      number("2");
    };
    document.getElementById("three").onclick = function () {
      number("3");
    };
    document.getElementById("four").onclick = function () {
      number("4");
    };
    document.getElementById("five").onclick = function () {
      number("5");
    };
    document.getElementById("six").onclick = function () {
      number("6");
    };
    document.getElementById("seven").onclick = function () {
      number("7");
    };
    document.getElementById("eight").onclick = function () {
      number("8");
    };
    document.getElementById("nine").onclick = function () {
      number("9");
    };
    document.getElementById("zero").onclick = function () {
      number("0");
    };

    function number(num) {
      var string = document.getElementById("mo").innerHTML;
      if (STATE === 0 || string === '0') {
        if (num !== '0') {
          document.getElementById("mo").innerHTML = num;
          STATE = 1;
        }
      } else {
        document.getElementById("mo").innerHTML += num;
      }
    }
  }



  {
   //operator zoom
    var num_temp = "0";
    var op_temp = "";
    document.getElementById("plus").onclick = function () {
      operation("+");
    };
    document.getElementById("minus").onclick = function () {
      operation("-");
    };
    document.getElementById("times").onclick = function () {
      operation("*");
    };
    document.getElementById("divides").onclick = function () {
      operation("/");
    };


    function operation(op) {
      if (STATE === 0 && op === '-') {
        document.getElementById("mo").innerHTML = '-';
        STATE = 1;
      } else {
        STATE = 0;
        if (op_temp === "") {
          op_temp += op;} else {
            // convert from string to digit
          var num1 = parseFloat(num_temp);
          var num2 = parseFloat(document.getElementById("mo").innerText);
          if (op_temp === '+') {
            document.getElementById("mo").innerText = num1 + num2;
          }
          if (op_temp === '-') {
            document.getElementById("mo").innerText = num1 - num2;
          }
          if (op_temp === '*') {
            document.getElementById("mo").innerText = num1 * num2;
          }
          if (op_temp === '/') {
            document.getElementById("mo").innerText = num1 / num2;
          }
        }
        op_temp = op;
      }
      num_temp = document.getElementById("mo").innerText;
    }

    document.getElementById("clear").onclick = function () {
      STATE = 0;
      document.getElementById("mo").innerText = '0';
      num_temp = "0";
      op_temp = "";
    };

  }


  {
    document.getElementById("dot").onclick = function () {
      var string = document.getElementById("mo").innerHTML;
      if (STATE) {
        if (parseInt(string) === parseFloat(string) && string.charAt(string.length - 1) !== '.') {
          document.getElementById("mo").innerHTML += '.';
        }
      } else {
        document.getElementById("mo").innerHTML = "0.";
        STATE = 1;
      }
    };
  }


}



















