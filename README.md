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

### Folder Structure

#### Code Snippets
All code snippets will belong to a particular Sim. As such code snippets should
live within the Simulators include folder. So all authipay related code snippets
will exist under `SimName/code`.

### Styleguide & Components

#### Side Menu
Side menus are made up from a number of smaller components collected into a single
file which is specific to a particular Simulator or actions. For example the
Authipay Docs side menu is located at [`authipay/docs/side-menu.html`](./_includes/authipay/docs/side-menu.html). This is made
from components which exist in the `docs/components/side-menu` folder.

Using this structure and the same small components allows us to maintain the same
style where needed but without limiting the structure of the `side-menu` components
too much.

#### Code Blocks
Code blocks are made up of two components. Firstly the code snippet that we wish
to display (such as `authipay/code/test.html`) and the `code-block` component.

In order to use these together we must first capture the code snippet so we can
pass it to the code block component. This can be done like:

```html
{% capture code_block %}{% include authipay/code/test.html %}{% endcapture %}
{% include docs/components/code-block.html content=code_block %}
```
