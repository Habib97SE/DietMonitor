//
//  UserModel.swift
//  Diet Monitor
//
//  Created by Habib Hezarehee on 2024-05-28.
//

import Foundation
import SwiftUI
import Observation

@Observable
class UserModel {
    let baseUrl = "http://localhost:8080/api/v1/users"
    var user: User?
    var userResponse : UserResponse?
    
    /**
     Send data via json
     */
    func register(firstName: String, lastName: String, email: String, phoneNumber: String, country: String, city: String, password: String, gender: String) async throws -> [String: Any] {
       print("register() is called")
        let endpoint = "/register"
        guard let url = URL(string: baseUrl + endpoint) else {
            throw URLError(.badURL)
        }

        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")

        let parameters: [String: Any] = [
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "phoneNumber": phoneNumber,
            "dateOfBirth": "1997-09-10",  // Example date of birth
            "country": country,
            "city": city,
            "gender": gender
        ]

        let jsonData = try JSONSerialization.data(withJSONObject: parameters, options: [])
        request.httpBody = jsonData

        let (data, response) = try await URLSession.shared.data(for: request)

        guard let httpResponse = response as? HTTPURLResponse else {
            throw URLError(.badServerResponse)
        }

        guard 200..<300 ~= httpResponse.statusCode else {
            let message = String(data: data, encoding: .utf8) ?? "Unknown error"
            throw NSError(domain: "HTTP Error", code: httpResponse.statusCode, userInfo: [NSLocalizedDescriptionKey: message])
        }

        do {
            let decoder = JSONDecoder()
            let userResponse = try decoder.decode(UserResponse.self, from: data)
            print(userResponse)

            var responseDict: [String: Any] = [
                "status": userResponse.status,
                "message": userResponse.message,
            ]
            
            print(responseDict)
            
            if let userData = userResponse.data {
                responseDict["data"] = [
                    "firstName": userData.firstName,
                    "lastName": userData.lastName,
                    "email": userData.email,
                    "phoneNumber": userData.phoneNumber,
                    "country": userData.country,
                    "city": userData.city,
                    "dateOfBirth": userData.dateOfBirth,
                    "gender": userData.gender
                ]
            }

            return responseDict
        } catch {
            print("Failed to decode JSON: \(error)")
            throw error
        }
    }

    
    func login(email: String, password: String) async throws {
        let endpoint = "/login"
        guard let url = URL(string: baseUrl + endpoint) else {
            return
        }
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        let parameters: [String: Any] = [
            "email": email,
            "password": password
        ]
        
        do {
            let jsonData = try JSONSerialization.data(withJSONObject: parameters, options: [])
            request.httpBody = jsonData
            
            let (data, _) = try await URLSession.shared.data(for: request)
            
            do {
                let decoder = JSONDecoder()
                self.user = try decoder.decode(User.self, from: data)
            } catch {
                print(error)
            }
        } catch {
            print(error)
        }
    }
    
    func logout() async throws {
        let endpoint = "/logout"
        guard let url = URL(string: baseUrl + endpoint) else {
            return
        }
        
        let (data,_) = try await URLSession.shared.data(from: url)
        
        do {
            let decoder = JSONDecoder()
            self.user = try decoder.decode(User.self, from: data)
        } catch {
            print("catch error in")
            print(error)
        }
    }
    
}
