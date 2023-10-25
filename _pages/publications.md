---
title: Publications
description: Chris Smeenk - Publications
image: /images/beinecke.jpg
notitle: true
toggle: hideall
target: .collapse.citation, .collapse.abstract, .collapse.bibtex, .collapse.fullentry
---

{% capture numItems %}
{% bibliography_count -q @book %}
{% endcapture %}
 
<h2 class="bibliography" style="counter-reset:bibitem {{numItems|plus:1}}">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.editedbooks" data-text="Collapse">Edited Books</a>&nbsp;
</h2>

<div class="collapse editedbooks show">
{% bibliography -q @book --template bib_item_publication %}
</div>



{% capture numItems %}
{% bibliography_count -q @article @incollection %}
{% endcapture %}

<p></p>
<h2 class="bibliography" style="counter-reset:bibitem {{numItems|plus:1}}">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.articles" data-text="Collapse">Articles</a></h2>

<div class="articles collapse show">
{% bibliography --query @article[kind!=short] @incollection[kind!=short] --template bib_item_publication %}
</div>

<p></p>
<h2 class="bibliography">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.shortarticles" data-text="Collapse">Reviews and other Contributions</a></h2>

<div class="collapse shortarticles show">
{% bibliography -q @article[kind=short] @incollection[kind=short] --template bib_item_publication %}
</div>

{% capture numItems %}
{% bibliography_count --file talks.bib -q @unpublished[Eventtitle!=""] -q @unpublished %}
{% endcapture %}

<p></p>
<h2 class="bibliography" style="counter-reset:bibitem {{numItems|plus:1}}">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.talks" data-text="Collapse">Selected Talks & Presentations</a></h2>

<div class="collapse talks show">
{% bibliography --file talks.bib -q @unpublished[Eventtitle!=""] --template bib_item_talk %}
</div>
