import Foundation
import MnemonicSwift
import Domain

public protocol ValidateMnemonic {
    func validate(_ mnemonic: String) throws
}

public final class ValidateMnemonicImp: ValidateMnemonic {

    public init() { }

    public func validate(_ mnemonic: String) throws {
        try Mnemonic.validate(mnemonic: mnemonic)
    }
}
