import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon-ligth.png" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Poppins:wght@500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script id="intercom-settings">
            {`
              window.intercomSettings = {
                api_base: "https://api-iam.intercom.io",
                app_id: "uh2emjxl",
              };
            `}
          </Script>
          <Script id="intercom-widget">
            {`
              (function(){
                var w=window;
                var ic=w.Intercom;
                if(typeof ic==="function"){
                  ic('reattach_activator');
                  ic('update',w.intercomSettings);
                }else{
                  var d=document;
                  var i=function(){i.c(arguments);};
                  i.q=[];
                  i.c=function(args){i.q.push(args);};
                  w.Intercom=i;
                  var l=function(){
                    var s=d.createElement('script');
                    s.type='text/javascript';
                    s.async=true;
                    s.src='https://widget.intercom.io/widget/uh2emjxl';
                    var x=d.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s,x);
                  };
                  if(document.readyState==='complete'){
                    l();
                  }else if(w.attachEvent){
                    w.attachEvent('onload',l);
                  }else{
                    w.addEventListener('load',l,false);
                  }
                }
              })();
            `}
          </Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
