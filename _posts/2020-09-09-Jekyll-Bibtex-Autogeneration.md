---
title: "This websites auto-generates from a BibTex file. See how."
date: 2020-09-09 
image: '/images/moveabletype.jpg'
excerpt: "Barebones tutorial on how to automatically generate publications lists on a website from a BibTex file"
categories: 
  - BibTex
  - Jekyll
  - BibDesk
---

The **Publications & Talk** and **Teaching** portions of this website auto-generate from **BibTex** files. That means that I didn't input the information directly into any pre-formatted website page template. Rather, I keep a list of my publication, talks, and classes I've taught in BibTex format (as I would any other bibliographical references), and this website reads the BibTeX list and generates the appropriate pages. For example, the source files for [this entry](https://zbiener.github.io/publications/#Biener2014a-anchor) and [this entry](https://zbiener.github.io/publications/#talk39-fullentry) look like this:


~~~ shell
@book{Biener2014a,
	Address = {Oxford},
	Amazon = {https://www.amazon.com/Newton-Empiricism-Zvi-Biener/dp/0199337098},
	Booktitle = {Newton and Empiricism},
	Category = {Secondary},
	Date = {2014},
	Editor = {Biener, Zvi and Schliesser, Eric},
	Publisher = {Oxford University Press},
	Abstract = {This volume of original papers by a leading team of international scholars explores Isaac Newton's relation to a variety of empiricisms and empiricists. It includes studies of Newton's experimental methods in optics and their roots in Bacon and Boyle; Locke's and Hume's responses to Newton on the nature of matter, time, the structure of the sciences, and the limits of human inquiry. In addition it explores the use of Newtonian ideas in 18th-century pedagogy and the life sciences. Finally, it breaks new ground in analyzing the method of evidential reasoning heralded by the Principia, its nature, strength, and development in the subsequent three centuries of gravitational research. The volume will be of interest to historians of science and philosophy and philosophers interested in the nature of empiricism.},

@unpublished{talk39,
	Category = {secondary},
	Eventdate = {2018-07-10},
	Eventtitle = {HOPOS 2020},
	Title = {A Deflationary Account of Newton’s Rule 3},
	Venue = {Groningen, Netherlands}}
~~~

**@book** defines a books, **@article** defines an article, **@incollection** defines an essay in an edited volumed, **@unpublished** defines a talk, **@course** defines a course I've taught.

There's no need to work with the BibTex file directly. It is easier to work with a GUI front-end like [BibDesk](http://https://bibdesk.sourceforge.io/"), which is what I do. In BibDesk, the top entry looks like this:

![BibDesk Screenshot](/images/BibDesk_Screenshot.jpg){:width="75%"}


**So how do I do this?** Good question. For all this to work, you make your website using the wonderful [Jekyll](https://jekyllrb.com/ "Jekyll"). I'll write about it some other time, but it is by far the easiest way to create a website for anyone who is even a little comfortable editing plain text files. The entire site is generated from a series of human-readable files, without the need to muck with code (unless you want to). There are tons of tutorials on how to use Jekyll, so I won't repeat them. Just remember that GitHub will host Jekyll pages for free. 

You must also use the [Jekyll-Scholar Plugin](https://github.com/inukshuk/jekyll-scholar "Scholar Plugin") in order to properly process the BibTex files. There are also how-to's for Jekyll Scholar. However, it might be easier if I direct you to a working example. So... Go to [https://github.com/ZBiener/zbiener.github.io/tree/source](https://github.com/ZBiener/zbiener.github.io/tree/source). Make sure your are on the **Source** tree. Now look at the files in the **Layouts** folder. Anything that begins with **bib** determines the layout of items read from the BibTex file, with are found in the **_Data** folder. (BTW, the _data folder also contains the main configuration files for Jekyll, if you want to have a look.)

Basically, Jekyll-Scholar makes an "entry" object for each publication in the BibTex file in **_Data**, with the object properties corresponding to the fields in BibTex. You can can access these properties through appropriate tags. The layout files show how to tags are combined to make longer bibliographic entires. It is entirely up to you how to format them. For example, my layout file for publications (**bib_item_publication**) includes reference to an Amazon page. You can make the layout as simple or as complicated as you like. You can see a simpler example in the layout file for talks (**bib_item_talk**) or for courses (**bib_item_course**).

You can also add various tricks. For example, my book layout searches for any images whose filename matches the BibTex key of the selected publication. So, in the example above, it looks for files like **Biener2014a.jpg** and then adds them to the webpage display.

While the **bib_item_x** files determine how each entry is formatted, the list of entries as a whole is generated by the **publication.md** file (or **teaching.md**) in the **_pages** folder. In fact, these latter files are the ones that query the BibTex files for information, and then ask the bib_item_x files how to format the results they receive. The HTML formatting is done by CSS.

Your best bet is just to root around the GitHub repository, and ask me if you have any other questions.