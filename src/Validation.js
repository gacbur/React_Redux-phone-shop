export const Validation = (values) => {

    const { username, rating, opinion } = values

    let errors = {}

    if (username === '') {
        errors.usernameError = 'Username cannot be empty.'
    }
    else if (username.length < 2) {
        errors.usernameError = 'Username cannot be smaller than 2 characters.'
    }

    if (rating === '') {
        errors.ratingError = 'Rating cannot be empty.'
    }
    else if (rating > 5 || rating < 1) {
        errors.ratingError = 'Rating must be in span of 1 to 5.'
    }

    if (opinion === '') {
        errors.opinionError = 'Opinion cannot be empty.'
    }
    if (opinion.length > 500) {
        errors.opinionError = 'Opinion can contain only 500 characters/'
    }

    return errors

}