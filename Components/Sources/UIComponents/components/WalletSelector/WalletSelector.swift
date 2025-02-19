import Foundation
import SwiftUI
import Commons

public struct WalletSelector: View {

    private let walletColor: String
    private let walletName: String
    private let walletAddress: String

    public init(walletColor: String, walletName: String, walletAddress: String) {
        self.walletColor = walletColor
        self.walletName = walletName
        self.walletAddress = walletAddress
    }

    public var body: some View {
        Image(walletColor)
            .resizable()
            .aspectRatio(contentMode: .fill)
            .frame(width: 48, height: 48)
            .clipShape(Circle())
        VStack(alignment: .leading, spacing: 1) {
            HStack {
                Text(walletName)
                    .font(.custom(font: .inter, size: 18, weight: .bold))
                    .foregroundColor(Color(Colors.Label.primary))
                Image("WalletSelector")
                    .frame(width: 24, height: 24)
                    .foregroundColor(Color(.darkGray))
            }
            Text(walletAddress)
                .foregroundColor(Color(Colors.Label.secondary))
                .font(.custom(font: .inter, size: 14, weight: .medium))
                .frame(alignment: .leading)
        }
    }
}

