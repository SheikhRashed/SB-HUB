// @ts-nocheck
'use strict'
// UI Var
const recomendDiv = document.querySelector('.business-Tools__reco')
const appendDiv = document.querySelectorAll('.append')
const alphabet = document.querySelector('#alphabet')
const render = document.querySelector('.toolbox__render-item')
const recommendedList = document.querySelector('.business-Tools__tool-item')
const recommendItemList = document.querySelectorAll('.business-Tools__tool-item li')

// Plugin Initalizations

$(window).scroll(function () {
	if ($(window).scrollTop() >= 300) {
		$('header').addClass('fixed-header')
		$('header nav').addClass('visible-title')
	} else {
		$('header').removeClass('fixed-header')
		$('header nav').removeClass('visible-title')
	}
})

$('.bannermwb').slick({
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 1600,
})

$('.quickView__slider-1').slick({
	dots: false,
	arrows: true,
	autoplay: false,
	autoplaySpeed: 2000,
	prevArrow: '.left',
	nextArrow: '.right',
})
$('.quickView__slider-2').slick({
	dots: false,
	arrows: true,
	autoplay: false,
	autoplaySpeed: 2000,
	prevArrow: '.left.left-2',
	nextArrow: '.right.right-2',
})

$('.feed__slider').slick({
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	dots: false,
	prevArrow: '<button class="prevArrow"> <i class="fas fa-chevron-left"></i></button>',
	nextArrow: '<button class="nextArrow"> <i class="fas fa-chevron-right"></i></button>',
})
$('.system__status-slider').slick({
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	autoplay: true,
	autoplaySpeed: 2900,
	dots: true,
	arrows: false,
	prevArrow: '<button class="prevArrow"> <i class="fas fa-chevron-left"></i></button>',
	nextArrow: '<button class="nextArrow"> <i class="fas fa-chevron-right"></i></button>',
})
$('.tabs__slider').slick({
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	dots: true,
	arrows: false,
	autoplay: true,
})

const toggle = document.querySelector('.toggle')
const toggle2 = document.querySelector('.toggle2')
const sticky = document.querySelector('.sticky__sidebar')
const sticky2 = document.querySelector('.sticky__sidebar.social')

toggle.addEventListener('click', (e) => {
	sticky.classList.toggle('open')
})
toggle2.addEventListener('click', (e) => {
	sticky2.classList.toggle('open')
})

$('#alphabet').listnav({
	includeAll: false,
	includeNums: false,
	showCounts: false,
})

$('#alphabet-sm').listnav({
	includeAll: false,
	includeNums: false,
	showCounts: false,
})

// Business tool suggest form

// Sweetalert delete start
$('#sendRequest').on('click', function () {
	Swal.fire({
		title: 'Success',
		text: `Thank you for your Business tool suggestion. 
        Your request will be made available upon approval.`,
		showCloseButton: true,
		showConfirmButton: false,
	})
})
const venobox = document.querySelector('.venobox')

if (venobox) {
	$('.venobox').venobox()
}

document.addEventListener('DOMContentLoaded', function () {
	if (document.getElementById('shortSelect')) {
		let sortSelect = new BVSelect({
			selector: '#sortSelect',
			searchbox: false,
			offset: true,
			search_autofocus: false,
			placeholder: 'Sort by topic',
			breakpoint: 0,
		})
	}
	if (document.getElementById('latestSelect')) {
		let latestSelect = new BVSelect({
			selector: '#latestSelect',
			searchbox: false,
			offset: true,
			search_autofocus: false,
			placeholder: 'latest',
			breakpoint: 0,
		})
	}
})

// smoot scrolling
const links = document.querySelectorAll('.content-navigation ul a')

for (const link of links) {
	link.addEventListener('click', smootScroll)
	link.addEventListener('click', () => {
		removeActiveClass()
		link.classList.add('active')
	})
}

function removeActiveClass() {
	links.forEach((link) => {
		link.classList.remove('active')
	})
}

function smootScroll(e) {
	e.preventDefault()
	const href = this.getAttribute('href')
	const offsetTop = document.querySelector(href).offsetTop
	console.log(this)
	scroll({
		top: offsetTop,
		behavior: 'smooth',
	})
}

$(window).scroll(function () {
	var stickyNav = $('.content-navigation'),
		scroll = $(window).scrollTop()

	if (scroll >= 600) stickyNav.addClass('fixed')
	else stickyNav.removeClass('fixed')
})
