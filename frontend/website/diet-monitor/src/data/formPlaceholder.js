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

export default { loginForm}