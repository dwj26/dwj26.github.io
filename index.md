---
layout: default
title: "A Slice of Cambridge"
description: "A Slice of Cambridge. A Cambridge food and lifestyle blog serving up a slice of Cambridge by showing the best places to eat, drink and see. Instagram - A Slice of Cambridge (@asliceofcambridge)"
---

<p></p>
<h3 align = "center" class = "homeh3"><span>Featured</span></h3>
<div class="container-fluid">
<div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval = "2000">
<div class="carousel-inner row w-100 mx-auto">
            {% for post in site.posts %}
            {% if post.featured-active %}
                <div class="carousel-item col-md-12 col-xl-4 active">
												<div class="grid-banner" style="background-image: url('{{ post.featured-img }}');">
													<div class = "middle">
													<h3 class = "posth3">{{ post.title }}</h3>
													<p>{{post.date | date_to_string}}</p>
                          <a href="{{post.url}}"><div class = "btn">Read</div></a>
												</div>
												<p></p>
											</div>

                </div>
              {% endif %}
            {% endfor %}
            {% for post in site.posts %}
            {% if post.featured %}
                <div class="carousel-item col-md-12 col-xl-4">
                        <div class="grid-banner" style="background-image: url('{{ post.featured-img }}');">
                          <div class = "middle">
                          <h3 class = "posth3">{{ post.title }}</h3>
                          <p>{{post.date | date_to_string}}</p>
                          <a href="{{post.url}}"><div class = "btn">Read</div></a>
                        </div>
                        <p></p>
                      </div>

                </div>
              {% endif %}
            {% endfor %}
    </div>
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
    </a>
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
													<h3 class = "posth3">{{ post.title }}</h3>
													<p>{{post.date | date_to_string}}</p>
                          <a href="{{ post.url }}"><div class = "btn">Read</div></a>
												</div>
												<p></p>
											</div>


                </div>
            {% endfor %}

    </div>

</div>
