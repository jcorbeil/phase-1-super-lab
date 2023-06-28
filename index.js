class Tree {
    constructor(species) {
      this.species = species;
    }
  
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    static definition() {
      return super.definition() + " Deciduous trees shed their leaves annually.";
    }
  }
  
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    static definition() {
      return super.definition() + " Evergreens keep their leaves all year round.";
    }
  }
  
  // Example usage:
  const tree = new Tree("Oak");
  console.log(tree.species);  // Output: Oak
  console.log(Tree.definition());  // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.
  
  const deciduousTree = new Deciduous("Maple", "Sugar Maple");
  console.log(deciduousTree.species);  // Output: Maple
  console.log(deciduousTree.name);  // Output: Sugar Maple
  console.log(Deciduous.definition());  // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually.
  
  const evergreenTree = new Evergreen("Pine", "White Pine");
  console.log(evergreenTree.species);  // Output: Pine
  console.log(evergreenTree.name);  // Output: White Pine
  console.log(Evergreen.definition());  // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Evergreens keep their leaves all year round.
  