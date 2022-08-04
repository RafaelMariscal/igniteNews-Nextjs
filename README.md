

<p> 
  <a href="#Sreenshots">Sreenshots</a>  | |  
  <a href="#About">About</a>  | |  
  <a href="#Techs">Techs, Libs and Plugins</a>  | |  
  <a href="#GettingStarted">GettingStarted</a> | |
  <a href="#Contributing">Contributing</a>
</p>

<h1>Ignete News</h1>
A <strong>Next.js</strong> + <strong>FaunaDB</strong> + <strong>Stripe</strong> + <strong>PrismicCMS</strong> + <strong>SASS</strong> web application built during Ignite Bootcamp, provided by <a href="https://www.rocketseat.com.br/">Rocketseat Programming School</a>, the largest programming school in Brazil.

</br>
</br>

> In addition to the original project, some issues with NextAuth.js, Stripe API, and  both FaunaDB and PrismicCMS versions have been fixed. Also, a responsive design has been implemented as well.

<h1 id="Sreenshots">Screenshots and Gifs</h1>
<p align="center">
<kbd>
<img src="https://media.giphy.com/media/deH3UTBDkfwmR9iVkm/giphy.gif" width="400px"/>
<img src="https://media.giphy.com/media/I1U36pxZNN92bZtCvG/giphy.gif" width="400px"/> </br>
<img src="https://github.com/RafaelMariscal/igniteNews-Nextjs/blob/main/public/images/Captura%20de%20tela%202022-07-02%20131012.jpg" width="400px"/>
<img src="https://github.com/RafaelMariscal/igniteNews-Nextjs/blob/main/public/images/Captura%20de%20tela%202022-07-02%20131140.jpg" width="400px"/> </br>
<img src="https://github.com/RafaelMariscal/igniteNews-Nextjs/blob/main/public/images/Captura%20de%20tela%202022-07-02%20131207.jpg" width="400px"/>
<img src="https://github.com/RafaelMariscal/igniteNews-Nextjs/blob/main/public/images/Captura%20de%20tela%202022-07-02%20131248.jpg" width="400px"/> </br>
</kbd>
</p>

<h2 id="About">About:</h2>
<p align="justify">
A <strong>Next.js</strong> + <strong>FaunaDB</strong> + <strong>Stripe</strong> + <strong>PrismicCMS</strong> + <strong>SASS</strong> web application built during Ignite Bootcamp, provided by <a href="https://www.rocketseat.com.br/">Rocketseat Programming School</a>, the largest programming school in Brazil.  The main reason for this project is to put in practice the these technologies fundamentals in one project, from the beggining to deploy. The user flow schema was made using <strong>whimsical</strong> and can be access <a href="https://whimsical.com/ig-news-user-flow-schema-QPksDNz8UdouYL568qjV7h">here</a>.
</p>

<kbd>
<img src="https://github.com/RafaelMariscal/igniteNews-Nextjs/blob/main/public/images/Captura%20de%20tela%202022-07-02%20141459.jpg" width="100%"/> 
</kbd>

<h2 id="Techs">Techs, Libs and Plugins:</h2>

<p aling="justify">In this project, it was used Techs, Libs and Plugins to improve the productivity when coding. Follow the list bellow to access all the technologies, libs and plugins documantations:</p>

<p align="center">
  <a href="https://pt-br.reactjs.org/docs/getting-started.html">React</a> | |
  <a href="https://nextjs.org/docs">Next.js</a> | | 
  <a href="https://next-auth.js.org/getting-started/introduction">NextAuth.js</a> | |  
  <a href="https://docs.github.com/pt/developers/apps/building-oauth-apps/authorizing-oauth-apps">Github OAtuh</a> | |  
  <a href="https://axios-http.com/ptbr/docs/intro">Axios</a> | |
  <a href="https://docs.fauna.com/fauna/current/learn/introduction/">FaunaDB</a> | |
  <a href="https://stripe.com/docs">Stripe</a> | | 
  <a href="https://prismic.io/docs/technologies/nextjs">PrismicCMS</a> | | 
  <a href="https://sass-lang.com/documentation/">SASS</a>
</p>

<h2 id="GettingStarted">GettingStarted</h2> 

    $ git clone git@github.com:RafaelMariscal/igniteNews-Nextjs.git
    $ cd igniteNews-Nextjs
    $ yarn

<p align="justify">In this project, the <strong>Stripe API</strong> was used as a Payment Platform, but is crucial to make it clear that a <strong>TEST VERSION</strong> of this API was used. Therefore, <strong>ALL PAYMENTS</strong> that will be processed <strong>ARE FAKE<strong>.

At the project's root diretory, a ``.env.local`` file needs to be created with these evironment variables to connect your project to the application.
 
 <h6>PS:  By accessing these links in braces, you'll find a guide to help you define these variables.</h6>
 
<h5>NEXTAUTH_SECRET={ <a href="https://next-auth.js.org/configuration/options#secret">Next-Secret-Hash</a> }<br/><br/>
STRIPE_API_KEY={ <a href="">Your-Shop-API-Key</a> }<br/>
NEXT_PUBLIC_STRIPE_PUBLIC_KEY={ <a href="https://dashboard.stripe.com/test/apikeys">Stripe-PublicKkey</a> }<br/>
STRIPE_WEBHOOK_SECRET={ <a href="https://dashboard.stripe.com/test/apikeys">Stripe-Secret-Key-Generated-By-The-StripeCLI</a> }<br/>
STRIPE_SUCCESS_URL={ URL-to-be-redirected-if-user-subscription-success }<br/>
STRIPE_CANCEL_URL={ URL-to-be-redirected-if-user-subscription-fail }<br/><br/>
GITHUB_CLIENT_ID=1{ <a href="https://docs.github.com/pt/rest/guides/basics-of-authentication">Github-client-ID</a> }<br/>
GITHUB_CLIENT_SECRET={ <a href="https://docs.github.com/pt/rest/guides/basics-of-authentication">Github-secret-ID</a> }<br/><br/>	
FAUNADB_KEY={ <a href="https://docs.fauna.com/fauna/current/security/keys?lang=javascript">FaunaDB-access-key</a> }<br/><br/>	
PRISMIC_ENDPOINT={ <a href="https://prismic.io/docs/technologies/custom-types-api">Prismic-Project-URL</a> }<br/>
PRISMIC_ACCESS_TOKEN={ <a href="https://prismic.io/docs/technologies/custom-types-api">Prismic-Project-Access-Token </a>}
</h5>

To listen the Stripe API webhooks requests, use the <a href="https://github.com/stripe/stripe-cli/releases/tag/v1.10.3">Stripe CLI</a>. Get every information about the Stripe CLI installation process <a href="https://stripe.com/docs/stripe-cli">here</a>. With the Stripe CLI open, run the command theses command lines:

	$ stripe login
	$ stripe listen --forward-to { "BaseURL" + "api/webhooks" }

After running the ``$ stripe login``  command, just confirm the project access to the Stripe API.  

The hash generated after running the ``$ stripe listen --forward-to { "BaseURL" + "api/webhooks" }`` command, needs to be atribuated to the STRIPE_WEBHOOK_SECRET environment variable at ``.env.local`` file.

The Next.Js documentation shows all the good practices that can be followed when using environments variables. To know more about it, access the <a href="https://nextjs.org/docs/basic-features/environment-variables#default-environment-variables">documentation</a>.

After all set up and with the terminal open at the project root file run the command line:
 
	$ yarn dev

The project will be hosted at localhost:3000.
</p>


<h2 id="Contributing">Contributing</h2>

You can send how many PR's do you want, I'll be glad to analyse and accept them! And if you have any question about the project...

Email-me: <a href="mailto: rafael_mariscal_@outlook.com">rafael_mariscal_@outlook.com</a>

Connect with me at  <a href="https://www.linkedin.com/in/rafael-mariscal/">LinkedIn</a>

Thank you!
