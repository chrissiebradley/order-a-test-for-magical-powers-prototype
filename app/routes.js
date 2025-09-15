// External dependencies
const express = require('express')

const router = express.Router()

// Called when answering question about whether NHS number is known
router.post('/magical-powers-answers', (req, res) => {

  // Make a variable and give it the value from 'nhsNumberKnown'
  const hasSymptoms = req.session.data.hasSymptoms

  // Check whether the variable matches a condition
  if (hasSymptoms === 'Yes') {

    // Send user to a page where they’ll enter their NHS number
    res.redirect('/details')

  } else if (hasSymptoms === 'No') {

    // Send user to a page where they can find their NHS number
    res.redirect('/ineligible')

  } else {

    // Send user back to the question page
    res.redirect('/details')

  }
})

module.exports = router
