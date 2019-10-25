const validate = (value) => {
  const errors = {}
  if (!value.influencerFee) {
    console.log("error")
    errors.influencerFee = 'This field is required!'
  }
  if (!value.usageFee) {
    console.log("error")
    errors.usageFee = 'This field is required!'
  }
  if (!value.otherPaidContent) {
    errors.otherPaidContent = 'This field is required!'
  }

  return errors
}

export default validate
