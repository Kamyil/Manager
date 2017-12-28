let data = [

    [{

      text: "Cut （ctrl+x）",

      action: function () {

        alert("Cut");

      }

    },

    {

      text: "Copy（ctrl+c）"

    },

    {

      text: "Paste（ctrl+v）",

      action: function () {

        alert("Paste");

      }

    }],

    [{

      text: "Bold （ctrl+b）"

    },

    {

      text: "Underline（ctrl+u）"

    }]

];

$(".list-tab").contextMenu(data);
