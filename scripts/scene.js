let _libWrapperRegistered = false;

Hooks.on("canvasInit", function (canvas) {

    //town
    if (canvas.scene.getFlag("zei-lib", "is_town") && !_libWrapperRegistered) {
        _libWrapperRegistered = true
    } else if (!canvas.scene.getFlag("zei-lib", "is_town") && _libWrapperRegistered) {
        libWrapper.unregister_all("zei-lib");
        _libWrapperRegistered = false
    }

});

Hooks.on("renderSceneConfig", (app, html, data) => {

    let isTown = app.object.getFlag("zei-lib", "is_town") || false;
    let playlist = app.object.getFlag("zei-lib", "playlist") || "";

    const _html = `
    <div class="form-group" xmlns="http://www.w3.org/1999/html">
        <label>Enable Town Mode</label>
        <input id="zei-town-mode" type="checkbox" name="zei-town-mode" data-dtype="Boolean" ${isTown ? "checked" : ""}></div>
    
    <div class="form-group" xmlns="http://www.w3.org/1999/html">
        <label>Music Playlist</label>
        <input id="zei-playlist" type="text" name="zei-playlist" value="${playlist}">
    </div>
    `;
       
    const _find = html.find("input[name ='name']");
    const _formGroup = _find.closest(".form-group");
    _formGroup.after(_html);
    html.find($('button[name="submit"]')).click(app.object, _saveSceneConfig);
});

//scene activate
Hooks.on("canvasReady", async function () {
    let sceneInTown = canvas.scene.getFlag("zei-lib", "is_town");
    let playlist = canvas.scene.getFlag("zei-lib", "playlist");

    if (canvas.scene.active && !canvas.scene.name.includes("Test")) {
        if (sceneInTown != _townSettings.inTown)
            toggleTownR(sceneInTown);
    
    if (playlist) {
            spotify("play", playlist);
        }
    }
});

async function _saveSceneConfig(event) {
    let html = this.parentElement

    // let prevTownSetting = event.data.getFlag(
    //     "zei-lib",
    //     "is_town");

    // let newTownsetting = html.querySelectorAll("input[name ='zei-town-mode']")[0].checked

    await event.data.setFlag(
        "zei-lib",
        "is_town",
        html.querySelectorAll("input[name ='zei-town-mode']")[0].checked
    );

    await event.data.setFlag(
        "zei-lib",
        "playlist",
        $("input[name ='zei-playlist']").val()
    );
}