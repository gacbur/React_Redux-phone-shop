export const Validation = (values) => {

    const { username, rating, opinion } = values

    let errors = {}

    if (username === '') {
        errors.usernameError = 'Username cannot be empty.'
    }
    else if (username.length < 4) {
        errors.usernameError = 'Username cannot be smaller than 4 characters.'
    }

    if (rating === '') {
        errors.ratingError = 'Rating cannot be empty.'
    }

    if (opinion === '') {
        errors.opinionError = 'Opinion cannot be empty.'
    }
    if (opinion.length > 500) {
        errors.opinionError = 'Opinion can contain only 500 characters/'
    }

    return errors

}