        function save() {
          const html = document.getElementById("html");
          const js = document.getElementById("javascript");
          const css = document.getElementById("css");
          console.log("html=" + html.value);
          const output = document.getElementById("output").contentWindow.document
          output.body.innerHTML = html.value;
          var mcss = document.createElement('style');
          mcss.textContent = css;
          output.head.appendChild(mcss);
          var mjs = document.createElement('script');
          mjs.type = 'text/javascript';
          mjs.textcontent = js;
          output.head.appendChild(mjs);
          
          var titles = output.title;
          document.getElementById("minititle").textContent = titles;
                                  
          document.cookie = "html=" + html.value;
          document.cookie = "javascript=" + js.value;
          document.cookie = "css=" + css.value;
        }








