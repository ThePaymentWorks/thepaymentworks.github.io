# tp_website
Our public facing website.

### Getting up and running
These are the steps needed to get the site running locally on your machine.

#### 1 - First clone the repo into your local machine

```bash
$ git clone git@github.com:ThePaymentWorks/thepaymentworks.github.io.git
```

#### 2 - Install Ruby
In order to run the site we will need Jekyll, and it will require a version of
ruby greater than `2.1.0`. You can check your ruby version with the following
command.

```bash
$ ruby -v
```

In order to install ruby [see the official guide](https://www.ruby-lang.org/en/documentation/installation/).

#### 2 - Installing dependencies
Now that we have the repo on your machine  and ruby installed . Navigate to
the repo in your terminal app of choice. Then run the following command to
install the sites dependencies.

```bash
$ bundle install
```

#### 3 - Running with Jekyll
To run the site use the following command

```bash
bundle exec jekyll serve
```

You should now have the site running at localhost:4000/

##### 3.A run with npm

With additional functionality around the gateway search and the comparison matrix we need React components as well to work.

In order to get going, first you need ot install the dependencies with `npm install` and then you can use the

```bash
npm run dev
```

command to have the site running at localhost:3333/ This way your React components are monitored as well, so every time you make a change on the Jekyll templates or in the components, your site gets rebuilt.


### Folder Structure

#### Code Snippets
All code snippets will belong to a particular Sim. As such code snippets should
live within the Simulators include folder. So all authipay related code snippets
will exist under `SimName/code`.

### Styleguide & Components

#### Headings
##### page-heading
For the Docs we have a number of headings. Firstly each page should have a `page-header`
that describes the contents of the page. Often this will co-inside with the url, for
instance the "/welcome" pages header is "Welcome".

In order to create a page header we use a `<h1>` tag with the `page-heading` class like so:

```html
<h1 class="page-heading">Some Heading</h1>
```

##### section-heading
Currently our only other header is the `section-heading` class. These are used to break up
larger content into smaller sections. These tags also ___always___ have an id so they can
be linked to.

For SEO reasons these headings use `<h2>` tags even though their font-size is much lower
than that of the the page headings.

```html
<h2 id="some-section-heading" class="section-heading">Some Section Heading</h2>
```

> Note that headings shoult not be placed inside a `text-block` class

#### Side Menu
Side menus are made up from a number of smaller components collected into a single
file which is specific to a particular Simulator or actions. For example the
Authipay Docs side menu is located at [`authipay/docs/side-menu.html`](./_includes/authipay/docs/side-menu.html). This is made
from components which exist in the `docs/components/side-menu` folder.

Using this structure and the same small components allows us to maintain the same
style where needed but without limiting the structure of the `side-menu` components
too much.


#### Whats Next
The "Whats Next" section should be present at the end of every document, except for
the last page of a series. These are important because they will be the main method
of navigation through the docs on smaller devices for the moment. Since we can rely
on the browsers built in "Back" function we need only provide a method of advancing.

In order to add a "Whats Next" section simply import the component with a title and
reference to where your sending the user. Generally it will be a description of the
next step in the series.

```liquid
{% include docs/components/whats-next.html
  text="An overview of what the developer playground can do."
  link_href="./using-a-simulator"
  link_text="Working with Simulators"
%}
```

#### Code Blocks
Code blocks are made up of two components. Firstly the code snippet that we wish
to display (such as `authipay/code/test.html`) and the `code-block` component.

In order to use these together we must first capture the code snippet so we can
pass it to the code block component. This can be done like:

```liquid
{% capture code_block %}{% include authipay/code/test.html %}{% endcapture %}
{% include docs/components/code-block.html content=code_block %}
```
