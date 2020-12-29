---
title: Teaching
description: Zvi Biener - Teaching
image: /images/british_m.jpeg
notitle: true
toggle: hideall
target: .collapse.fullentry, collapse.grad, collapse.undergrad
---

{% capture numItems %}
{% bibliography_count -q @course[keywords!=grad]  %}
{% endcapture %}

<h2 class="bibliography" style="counter-reset:bibitem {{numItems|plus:1}}">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.undergrad" data-text="Collapse">Undergraduate Courses</a>&nbsp;

</h2>


<div class="nolisting collapse undergrad show">
{% bibliography -q @course[keywords!=grad] --template bib_item_course %}
</div>

{% capture numItems %}
{% bibliography_count -q @course[keywords=grad]  %}
{% endcapture %}

<br>
<h2 class="bibliography" style="counter-reset:bibitem {{numItems|plus:1}}">
	<a class="plus-icon minus" data-toggle="collapse"  data-target=".collapse.grad" data-text="Collapse">Graduate Courses</a>&nbsp;
</h2>


<div class="nolisting item_content collapse grad show">
{% bibliography -q @course[keywords=grad] --template bib_item_course %}
</div>