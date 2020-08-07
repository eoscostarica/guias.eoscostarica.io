function mediumWidget() {
    MediumWidget.Init({
      renderTo: "#medium-widget",
      params: {
        resource: "https://medium.com/@eoscostarica",
        postsPerLine: 12,
        limit: 6,
        picture: "big",
        fields: ["description", "claps", "publishAt"],
        ratio: "original",
      },
    });
  }
