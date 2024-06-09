//
//  User.swift
//  Diet Monitor
//
//  Created by Habib Hezarehee on 2024-05-28.
//

import Foundation
import SwiftData

struct UserResponse : Decodable {
    let status : Int
    let message : String
    let data: User?
}

struct User : Decodable {
    let firstName: String
    let lastName: String
    let email: String
    let phoneNumber: String
    let country: String
    let city: String
    let dateOfBirth: String
    let gender: String
}
