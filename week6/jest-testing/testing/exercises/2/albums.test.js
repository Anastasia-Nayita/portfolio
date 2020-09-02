const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("album names are in alphabetical order", () => {
    spotify.search.mockResolvedValue({
        albums: {
            items: [
                {
                    name: "meat potato and loaf",
                },
                {
                    name: "too much meat",
                },
                {
                    name: "meat loaf",
                },
                {
                    name: "The meat loaf vol.2: Special Edition",
                },
            ],
        },
    });
    return getAlbumNames("meat loaf").then((albumNames) => {
        //console.log(albumNames);
        expect(albumNames).toEqual(albumNames.sort());
    });
});
