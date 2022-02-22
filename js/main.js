document.createElement('header');
document.createElement('section');
document.createElement('nav');
document.createElement('footer');

// favicon set
(function() {
  var link = document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = '/images/favicon.ico';
  document.getElementsByTagName('head')[0].appendChild(link);
}());
//