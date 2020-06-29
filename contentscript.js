setTimeout(function() {
  // click the commit message elipsis in the header
  var commitMessageElipsis = document.querySelector('.Box-header .js-details-target')
  if (commitMessageElipsis) {
    commitMessageElipsis.click()
  }

  // fix the alignment of those icons in the header nav
  var style = document.createElement('style')
  style.innerHTML = '.pagehead-actions .octicon { margin-top: -1px; }'
  document.body.appendChild(style)
}, 1)

