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
