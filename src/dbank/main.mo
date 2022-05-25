import Debug "mo:base/Debug"

actor DBank {
  stable var currentValue: Nat = 300;
  // stable enables persistence. := will still change it
  // currentValue := 100; will still change it even with stable enabled

  let id = 203494348;

  // Debug.print(debug_show(id))

  public func topUp(amount: Nat) {
    currentValue += amount;
    Debug.print(debug_show(currentValue))
  };

  public func withdrawal(amount: Nat) {

    let tempValue: Int = currentValue - amount;

    if(tempValue >= 0){
      currentValue -= amount;
    Debug.print(debug_show(currentValue))
    } else {
      Debug.print("Not enough funds bro!")
    }

    
  };
  
  public query func checkBalance(): async Nat {
    return currentValue;
  };
}
