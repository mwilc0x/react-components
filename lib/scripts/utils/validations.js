var validations = {
  length: function(value) {
    var length = value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }
}

module.exports = validations;
