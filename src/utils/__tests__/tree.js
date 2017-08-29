import { prune, makeTree, deepUpdate } from "../tree";

let tree,
  flatList = [];

beforeEach(() => {
  // Resets Data
  flatList = [
    {
      ID: 1,
      Name: "Grady"
    },
    {
      ID: 2,
      Name: "Scarlet"
    },
    {
      ID: 3,
      Name: "Adria",
      parentID: 2
    },
    {
      ID: 4,
      parentID: 3,
      Name: "Xerxes"
    },
    {
      ID: 5,
      Name: "Madeson"
    }
  ];

  tree = [
    {
      ID: 1,
      Name: "1",
      children: [
        {
          ID: 2,
          Name: "2"
        },
        {
          ID: 3,
          Name: "3",
          children: [
            {
              ID: 4,
              Name: "4"
            }
          ]
        }
      ]
    }
  ];
});

describe("Prune", () => {
  test("Prune Upmost Element Should Give Empty Array", () => {
    expect(prune(tree, 1)).toEqual([]);
  });

  test("Deletes Element With ID 3", () => {
    expect(prune(tree, 3)).toEqual([
      { ID: 1, Name: "1", children: [{ ID: 2, Name: "2" }] }
    ]);
  });
});

describe("Make Tree", () => {
  test("Make a tree structure from a flat list using parent IDs", () => {
    expect(makeTree(flatList)).toEqual([
      {
        ID: 1,
        Name: "Grady"
      },
      {
        ID: 2,
        Name: "Scarlet",
        children: [
          {
            ID: 3,
            Name: "Adria",
            parentID: 2,
            children: [
              {
                ID: 4,
                parentID: 3,
                Name: "Xerxes"
              }
            ]
          }
        ]
      },
      {
        ID: 5,
        Name: "Madeson"
      }
    ]);
  });
});

describe("Deep Update", () => {
  test("Update a deep element in a tree", () => {
    expect(deepUpdate(tree, 1, "Name", "Cagdas")).toEqual([
      {
        ID: 1,
        Name: "Cagdas",
        children: [
          {
            ID: 2,
            Name: "2"
          },
          {
            ID: 3,
            Name: "3",
            children: [
              {
                ID: 4,
                Name: "4"
              }
            ]
          }
        ]
      }
    ]);
  });
});
