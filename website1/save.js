        function save() {
          const html = document.getElementById("html");
          const js = document.getElementById("javascript");
          const css = document.getElementById("css");
          document.cookie = "html=" + html.value;
          document.cookie = "javascript=" + js.value;
          document.cookie = "css=" + css.value;
          console.log("html=" + html.value)
        }
