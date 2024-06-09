# Diet Monitor App

## Overview

The Diet Monitor App is designed to help users scan food products, track their calorie intake, and monitor their weight. The application consists of a Spring Boot backend and an iOS frontend built with Swift and SwiftUI.

## Project Structure

dietmonitor-app/
│
├── backend/
│ ├── src/
│ ├── pom.xml
│ └── ...
│
└── frontend/
└── ios/
├── DietMonitor/
├── DietMonoitor.xcodeproj
│ └── ...


## Backend

The backend is built using Spring Boot and provides API endpoints for user management, food product management, and integration with third-party APIs.

### Prerequisites

- Java 11 or higher
- Maven

### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/calorie-tracker-app.git
    cd calorie-tracker-app/backend
    ```

2. Build the project:
    ```bash
    mvn clean install
    ```

3. Run the application:
    ```bash
    mvn spring-boot:run
    ```

### API Endpoints

- **User Management**
  - `POST /api/users/register`
  - `POST /api/users/login`
  - `POST /api/users/logout`
  - `GET /api/users/profile`
  - `PUT /api/users/profile`

- **Food Product Management**
  - `POST /api/food/scan`
  - `GET /api/food/{barcode}`
  - `POST /api/food`
  - `PUT /api/food/{barcode}`
  - `DELETE /api/food/{barcode}`

- **Database and Third-Party Integration**
  - `GET /api/database/check/{barcode}`
  - `GET /api/thirdparty/food/{barcode}`
  - `POST /api/database/food`
  - `GET /api/thirdparty/fetch/{barcode}`
  - `POST /api/thirdparty/save`

## Frontend

The frontend is an iOS application built with Swift and SwiftUI. It allows users to scan barcodes, view nutritional information, and track their calorie intake and weight.

### Prerequisites

- macOS
- Xcode 12 or higher

### Setup

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend/ios
    ```

2. Open the project in Xcode:
    ```bash
    open CalorieTrackerApp.xcodeproj
    ```

3. Build and run the application on a simulator or a physical device.

## Contributing

We welcome contributions to the project! Please fork the repository and submit pull requests for any enhancements or bug fixes.

### Steps to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact me at habib@habibdev.se.


