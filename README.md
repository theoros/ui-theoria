# UI Theoria


## UI Engineering with Angular and D3

Mostly [Angular](https://angularjs.org/), [D3](https://d3js.org/) and [ES5](http://kangax.github.io/compat-table/es5/) code, with a dash of Angular Material.

This project's HTML files are generated from [Pug](https://pugjs.org) files, which I consider a more comfortable way
to _write_ & _read_ HTML (go ahead and compare the two, I'll wait for you).

CSS files are generated from [Sass](http://sass-lang.com/) files, same reasons apply for using it over plain CSS.


To see the components in action just `git clone` and open `dist/index.html`.


Versions for the libraries used:

* Angular: 1.5 ([style guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md))
* D3: 4


### fluid-svg

In this folder you'll find the template I use every time I have to create a new D3 component/directive.

It's the easiest way to setup a new SVG element that's fluid and preserves the aspect ratio when resizing the window.

Some important stuff to observe about this is that it's self-sufficient. It includes a mini template inside the
component definition that's going to be the container for the SVG element.

It does not need an external template, but it could be added in case you really needed a more complex layout.
Nevertheless I'd advise against it, since that should be done on parent elements.

Resize the browser and see how the aspect ratio is preserved.



### configurable-svg

Here you'll find an example for an Angular component that reacts to changes to its width and height.

This example builds on `fluid-svg`, and shows how to update the SVG element with D3 when the component's attributes
are modified.

Also, I discuss a bit about aspect ratios and why they are important for the SVG viewBox attribute.



## Material Design version with [Angular Material](https://material.angularjs.org/latest/)

If you want to see all the demos with a Material Design look & feel, open the `dist/index.html` file.


## Plain version

If you want to see a couple of demos with a minimal look & feel, open the `dist/index-plain.html` file.

You can see how the components are reused in a different UI context, with minimal effort.


## Play with it

After cloning the repo, you need to install `yarn`:

    npm install -g yarn


Then install all the project's dependencies:

    yarn install


Then start the development server:

    yarn start


Enjoy. ;)


## Last but not least

If you have any suggestions (or questions) as to what would you like to see, open an issue and let's discuss.
