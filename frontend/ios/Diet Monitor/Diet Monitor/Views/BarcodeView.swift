import SwiftUI

struct BarcodeView: View {
    @State private var scannedCode: String?

    var body: some View {
        VStack {
            if let scannedCode = scannedCode {
                Text("Scanned Code: \(scannedCode)")
                    .font(.largeTitle)
                    .padding()
            } else {
                BarcodeScannerView(didFindCode: { code in
                    self.scannedCode = code
                })
                .edgesIgnoringSafeArea(.all)
            }
        }
    }
}

