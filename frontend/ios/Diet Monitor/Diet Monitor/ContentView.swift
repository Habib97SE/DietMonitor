//
//  ContentView.swift
//  Diet Monitor
//
//  Created by Habib Hezarehee on 2024-05-28.
//

import SwiftUI

struct ContentView: View {
    @State var userModel : UserModel = UserModel()
    var body: some View {
        NavigationView {
            VStack {
                NavigationLink(destination: RegisterView(userModel: userModel)) {
                    Text("Go to register")
                        .padding()
                        .background(Color.blue)
                        .foregroundColor(.white)
                        .cornerRadius(9)
                }
                .padding()
                NavigationLink(destination: LoginView(userModel: userModel)) {
                    Text("Login")
                        .padding()
                        .background(Color.blue)
                        .foregroundColor(.white)
                        .cornerRadius(9)
                }
                NavigationLink(destination: BarcodeView()) {
                    Text("Scan")
                        .padding()
                        .background(Color.blue)
                        .foregroundColor(.white)
                        .cornerRadius(9)
                }
            }
        }
    }
}

#Preview {
    ContentView()
}
