module.exports = {
    format_date: (date) => {
      return date.toLocaleTimeString();
    },
    format_amount: (amount) => {
        return parseInt(amount).toLocaleString();
      }
  };