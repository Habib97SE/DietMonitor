export const loginForm = {
    email: {
        placeholder: 'Email',
        type: 'email',
        required: true,
        id: "email",
        label: "Email",
        name: "email"
    },
    password: {
        placeholder: "********",
        type: "password",
        required: true,
        id: "password",
        label: "Password",
        name: "password"
    },
    submitButton: {
        text: "Login",
        type: "submit",
    }
}

export const changePassword = {
    oldPassword: {
        placeholder: "Old Password",
        type: "password",
        required: true,
        id: "oldPassword",
        label: "Old Password",
        name: "oldPassword"
    },
    newPassword: {
        placeholder: "New Password",
        type: "password",
        required: true,
        id: "newPassword",
        label: "New Password",
        name: "newPassword"
    },
    confirmPassword: {
        placeholder: "Confirm Password",
        type: "password",
        required: true,
        id: "confirmPassword",
        label: "Confirm Password",
        name: "confirmPassword"
    },
    submitButton: {
        text: "Change Password",
        type: "submit",
    }
}

export const contactForm = {
    name: {
        placeholder: "Name",
        type: "text",
        required: true,
        id: "name",
        label: "Name",
        name: "name"
    },
    email: {
        placeholder: "Email",
        type: "email",
        required: true,
        id: "email",
        label: "Email",
        name: "email"
    },
    message: {
        placeholder: "Message",
        type: "text",
        required: true,
        id: "message",
        label: "Message",
        name: "message"
    },
    agreement: {
        type: "checkbox",
        required: true,
        id: "agreement",
        label: "By checking this box, you agree to our terms and conditions.",
        name: "agreement"
    },
    submitButton: {
        text: "Send",
        type: "submit",
    }
}

export default {loginForm, changePassword}