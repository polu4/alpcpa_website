/**
 * Comprehensive input sanitization and validation utilities
 * Protects against XSS, injection attacks, and malicious input
 */

// Maximum character limits for form fields
export const LIMITS = {
    NAME: 100,
    EMAIL: 254, // RFC 5321 maximum email length
    MESSAGE: 2000,
};

/**
 * Sanitize text input by removing HTML tags and dangerous characters
 * @param {string} input - Raw user input
 * @returns {string} - Sanitized text
 */
export const sanitizeText = (input) => {
    if (!input || typeof input !== 'string') return '';

    // Remove HTML tags and dangerous characters manually
    // This is safe for plain text inputs where we don't allow any HTML
    let cleaned = input
        .replace(/<[^>]*>/g, '') // Remove all HTML tags
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+\s*=/gi, '') // Remove event handlers
        .replace(/[<>]/g, '') // Remove angle brackets
        .trim();

    return cleaned;
};


/**
 * Validate and sanitize email address
 * @param {string} email - Email address to validate
 * @returns {object} - { isValid: boolean, sanitized: string, error: string }
 */
export const validateEmail = (email) => {
    if (!email || typeof email !== 'string') {
        return { isValid: false, sanitized: '', error: 'Email is required' };
    }

    // Sanitize first
    const sanitized = email.trim().toLowerCase();

    // Check length
    if (sanitized.length > LIMITS.EMAIL) {
        return { isValid: false, sanitized, error: 'Email is too long' };
    }

    // Basic email validation using regex (more reliable than validator in ES modules)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitized)) {
        return { isValid: false, sanitized, error: 'Invalid email format' };
    }

    // Additional security checks
    if (sanitized.includes('..')) {
        return { isValid: false, sanitized, error: 'Invalid email format' };
    }

    return { isValid: true, sanitized, error: '' };
};

/**
 * Check if text contains URLs (to prevent spam/phishing)
 * @param {string} text - Text to check
 * @returns {boolean} - True if URLs detected
 */
export const containsURL = (text) => {
    if (!text || typeof text !== 'string') return false;

    // Common URL patterns
    const urlPatterns = [
        /https?:\/\//i,
        /www\./i,
        /\w+\.(com|org|net|edu|gov|io|co|uk|de|fr|jp|cn|ru|br|au|in|ca|nl|pl|es|it|se|no|fi|dk|be|ch|at|cz|gr|pt|ie|nz|za|mx|ar|cl|pe|ve|sg|my|th|id|ph|vn|pk|bd|ng|eg|ke|tz|ug|gh|sn|ci|cm|ao|mz|zw|bw|na|zm|mw|rw|bi|dj|so|sd|ly|tn|dz|ma|mr|ml|ne|td|cf|cg|ga|gq|st|gw|sl|lr|gm|gn|bf|bj|tg|cv|sc|mu|re|yt|km|mg|mq|gp|bl|mf|pm|wf|pf|nc|vu|fj|sb|pg|to|ws|ki|tv|nr|pw|fm|mh|mp|gu|as|vi|pr|do|jm|tt|bb|lc|vc|gd|ag|kn|dm|ht|bs|tc|vg|ai|ms|ky|bm|gl|fo|ax|sj|im|je|gg|gi|mt|sm|va|li|mc|ad|lu|is|ee|lv|lt|by|ua|md|ro|bg|mk|al|rs|me|ba|hr|si|sk|hu|cz|pl|de|at|ch|li|it|va|sm|mt|cy|tr|ge|am|az|kz|uz|tm|kg|tj|af|pk|in|bd|lk|np|bt|mv|mm|th|la|kh|vn|my|sg|bn|ph|id|tl|pg|au|nz|fj|sb|vu|nc|pf|wf|to|ws|ki|tv|nr|pw|fm|mh|mp|gu|as|vi|pr|do|jm|tt|bb|lc|vc|gd|ag|kn|dm|ht|bs|tc|vg|ai|ms|ky|bm)/i,
        /\[url\]/i,
        /\[link\]/i,
    ];

    return urlPatterns.some(pattern => pattern.test(text));
};

/**
 * Check for common XSS attack patterns
 * @param {string} text - Text to check
 * @returns {boolean} - True if XSS patterns detected
 */
export const containsXSS = (text) => {
    if (!text || typeof text !== 'string') return false;

    const xssPatterns = [
        /<script/i,
        /javascript:/i,
        /on\w+\s*=/i, // Event handlers like onclick=, onerror=
        /<iframe/i,
        /<object/i,
        /<embed/i,
        /<img[^>]+src/i,
        /eval\(/i,
        /expression\(/i,
    ];

    return xssPatterns.some(pattern => pattern.test(text));
};

/**
 * Validate name field
 * @param {string} name - Name to validate
 * @returns {object} - { isValid: boolean, sanitized: string, error: string }
 */
export const validateName = (name) => {
    if (!name || typeof name !== 'string') {
        return { isValid: false, sanitized: '', error: 'Name is required' };
    }

    // Sanitize
    const sanitized = sanitizeText(name);

    // Check if empty after sanitization
    if (!sanitized || sanitized.length === 0) {
        return { isValid: false, sanitized: '', error: 'Name cannot be empty' };
    }

    // Check length
    if (sanitized.length > LIMITS.NAME) {
        return { isValid: false, sanitized: sanitized.substring(0, LIMITS.NAME), error: `Name must be ${LIMITS.NAME} characters or less` };
    }

    // Check for URLs
    if (containsURL(sanitized)) {
        return { isValid: false, sanitized, error: 'URLs are not allowed in name field' };
    }

    // Check for XSS patterns
    if (containsXSS(sanitized)) {
        return { isValid: false, sanitized, error: 'Invalid characters detected' };
    }

    // Only allow letters, spaces, hyphens, and apostrophes
    const namePattern = /^[a-zA-Z\s\-'\.]+$/;
    if (!namePattern.test(sanitized)) {
        return { isValid: false, sanitized, error: 'Name can only contain letters, spaces, hyphens, and apostrophes' };
    }

    return { isValid: true, sanitized, error: '' };
};

/**
 * Validate message field
 * @param {string} message - Message to validate
 * @returns {object} - { isValid: boolean, sanitized: string, error: string }
 */
export const validateMessage = (message) => {
    if (!message || typeof message !== 'string') {
        return { isValid: false, sanitized: '', error: 'Message is required' };
    }

    // Sanitize
    const sanitized = sanitizeText(message);

    // Check if empty after sanitization
    if (!sanitized || sanitized.length === 0) {
        return { isValid: false, sanitized: '', error: 'Message cannot be empty' };
    }

    // Check length
    if (sanitized.length > LIMITS.MESSAGE) {
        return { isValid: false, sanitized: sanitized.substring(0, LIMITS.MESSAGE), error: `Message must be ${LIMITS.MESSAGE} characters or less` };
    }

    // Check for URLs (optional - you may want to allow URLs in messages)
    if (containsURL(sanitized)) {
        return { isValid: false, sanitized, error: 'URLs are not allowed in messages. Please contact us directly if you need to share a link.' };
    }

    // Check for XSS patterns
    if (containsXSS(sanitized)) {
        return { isValid: false, sanitized, error: 'Invalid characters detected' };
    }

    return { isValid: true, sanitized, error: '' };
};

/**
 * Validate entire form data
 * @param {object} formData - { name, email, message }
 * @returns {object} - { isValid: boolean, sanitized: object, errors: object }
 */
export const validateForm = (formData) => {
    const nameValidation = validateName(formData.name);
    const emailValidation = validateEmail(formData.email);
    const messageValidation = validateMessage(formData.message);

    const isValid = nameValidation.isValid && emailValidation.isValid && messageValidation.isValid;

    const sanitized = {
        name: nameValidation.sanitized,
        email: emailValidation.sanitized,
        message: messageValidation.sanitized,
    };

    const errors = {
        name: nameValidation.error,
        email: emailValidation.error,
        message: messageValidation.error,
    };

    return { isValid, sanitized, errors };
};
