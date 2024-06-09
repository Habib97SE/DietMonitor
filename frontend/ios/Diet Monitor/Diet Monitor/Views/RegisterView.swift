//
//  RegisterView.swift
//  Diet Monitor
//
//  Created by Habib Hezarehee on 2024-05-29.
//

import SwiftUI

struct RegisterView: View {
    
    @State private var firstName = ""
    @State private var lastName = ""
    @State private var emailAddress = ""
    @State private var phoneNumber = ""
    @State private var password = ""
    @State private var country = ""
    @State private var city = ""
    @State private var gender = ""
    
    @State private var error : Bool = false
    @State private var errorMessage: String = ""
    @State private var successMessage: String = ""
    
    @State var userModel: UserModel
    
    
    let genders = ["Male", "Female", "Other", "Prefer not to say"]
    let countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia",
        "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
        "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
        "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the",
        "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
        "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
        "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
        "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia",
        "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
        "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
        "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
        "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
        "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
        "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
        "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
        "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
        "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
        "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
        "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
        "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ]
    
    var body: some View {
            NavigationView {
                Form {
                    Section(header: Text("Personal Information")) {
                        TextField("First Name", text: $firstName)
                            .autocapitalization(.words)
                        
                        TextField("Last Name", text: $lastName)
                            .autocapitalization(.words)
                        
                        TextField("Email Address", text: $emailAddress)
                            .keyboardType(.emailAddress)
                            .autocapitalization(.none)
                        
                        TextField("Phone Number", text: $phoneNumber)
                            .keyboardType(.phonePad)
                        
                        SecureField("Password", text: $password)
                    }
                    
                    Section(header: Text("Location Information")) {
                        Picker("Select a country", selection: $country) {
                            ForEach(countries, id: \.self) { country in
                                Text(country)
                            }
                        }
                        
                        TextField("City", text: $city)
                            .autocapitalization(.words)
                    }
                    
                    Section(header: Text("Gender")) {
                        Picker("Select your gender", selection: $gender) {
                            ForEach(genders, id: \.self) { gender in
                                Text(gender)
                            }
                        }
                        .pickerStyle(.menu)
                    }
                    
                    Button(action: {
                        if (firstName.isEmpty || lastName.isEmpty || emailAddress.isEmpty || phoneNumber.isEmpty || password.isEmpty || country.isEmpty || city.isEmpty || gender.isEmpty) {
                            error = true
                            errorMessage = "All fields are required."
                        } else {
                            error = false
                            handleRegister()
                        }
                    }) {
                        Text("Register")
                            .frame(maxWidth: .infinity, alignment: .center)
                            .padding()
                            .foregroundColor(.white)
                            .background(Color.blue)
                            .cornerRadius(8)
                            .font(.title2)
                    }
                    
                    if !errorMessage.isEmpty {
                        Text(errorMessage).foregroundColor(.red)
                    }
                    
                    if !successMessage.isEmpty {
                        Text(successMessage).foregroundColor(.green)
                    }
                }
                .navigationBarTitle("Register", displayMode: .inline)
            }
        }
    
    func handleRegister() {
        Task {
            do {
                let response = try await userModel.register(firstName: firstName, lastName: lastName, email: emailAddress, phoneNumber: phoneNumber, country: country, city: city, password: password, gender: gender)
                
                if let status = response["status"] as? Int, let message = response["message"] as? String {
                    if status == 201 {
                        error = false
                        errorMessage = ""
                        successMessage = message
                    } else {
                        error = true
                        successMessage = ""
                        errorMessage = message
                    }
                } else {
                    error = true
                    successMessage = ""
                    errorMessage = "Invalid response from server"
                }
            } catch {
                self.error = true
                successMessage = ""
                errorMessage = "Something went wrong, please try again"
            }
        }
    }

}

