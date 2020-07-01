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

  // replace the clipboard (paste!) icon with old-school copy icon
  document.querySelectorAll('.octicon-clippy').forEach(svg => {
    svg.innerHTML = '<path fill="#888888" d="m0.333342,0.333288l0,0.542376l0,9.762766l0,0.542376l0.645831,0l3.874985,0l0,-1.084752l-3.229154,0l0,-8.678014l7.749971,0l0,0.542376l1.291662,0l0,-1.084752l0,-0.542376l-0.645831,0l-9.041632,0l-0.645831,0zm5.166647,2.169504l0,0.542376l0,9.762766l0,0.542376l0.645831,0l9.041632,0l0.645831,0l0,-0.542376l0,-9.762766l0,-0.542376l-0.645831,0l-9.041632,0l-0.645831,0zm1.291662,1.084752l7.749971,0l0,8.678014l-7.749971,0l0,-8.678014z"></path>'
  })
}, 1)
