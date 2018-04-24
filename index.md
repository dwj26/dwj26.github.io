---
layout: default
title: "A Slice of Cambridge"
description: "A Slice of Cambridge. A Cambridge food and lifestyle blog serving up a slice of Cambridge by showing the best places to eat, drink and see. Instagram - A Slice of Cambridge (@asliceofcambridge)"
---
<hr>

<p></p>
<h3 align = "center" class = "homeh3"><span>Featured</span></h3>
<div class="container">
    <div class="row">
            {% for post in site.posts %}
            {% if post.featured %}
                <div class="col-md-12 col-xl-4">
												<div class="grid-banner" style="background-image: url('{{ post.featured-img }}');">
													<div class = "middle">
													<h3>{{ post.title }}</h3>
													<p>{{post.date | date_to_string}}</p>
                          <a href="{{post.url}}"><div class = "btn">Read</div></a>
												</div>
												<p></p>
											</div>

                </div>
              {% endif %}
            {% endfor %}

    </div>

</div>
<hr>

<p></p>
<h3 align = "center" class = "homeh3"><span>All Posts</span></h3>
<div class="container">
    <div class="row">
            {% for post in site.posts %}
                <div class="col-md-12 col-xl-4">
												<div class="grid-banner" style="background-image: url('{{ post.featured-img }}');">
													<div class = "middle">
													<h3>{{ post.title }}</h3>
													<p>{{post.date | date_to_string}}</p>
                          <a href="{{ post.url }}"><div class = "btn">Read</div></a>
												</div>
												<p></p>
											</div>


                </div>
            {% endfor %}

    </div>

</div>
