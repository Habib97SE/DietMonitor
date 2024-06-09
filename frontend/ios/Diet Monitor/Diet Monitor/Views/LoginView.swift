//
//  LoginView.swift
//  Diet Monitor
//
//  Created by Habib Hezarehee on 2024-06-03.
//

import SwiftUI

struct LoginView: View {
    @State var userModel: UserModel
    @State private var email : String = ""
    @State private var password : String = ""
    
    @State private var error : Bool = false
    @State private var errorMessage: String = ""
    @State private var successMessage: String = ""
    var body: some View {
        VStack {
            Text("Login").font(.title)
        }
        VStack {
            TextField("Email Address", text: $email)
                .keyboardType(.emailAddress)
                .autocapitalization(.none)
            
            SecureField("Password", text: $password)
            
            Button(action: {
                if (email.isEmpty || password.isEmpty || password.count < 8) {
                    error = true;
                    successMessage = ""
                    errorMessage = "Invalid email or password, the password should be at least 8 characters."
                }
                handleLogin()
            }) {
                Text("Login")
            }
        }
    }
    
    func handleLogin() {
        Task {
            try await userModel.login(email: email, password: password)
        }
    }
}
