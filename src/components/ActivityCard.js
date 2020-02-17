import React from "react";

const activity = {
    resource_state: 2,
    athlete: {
      id: 21284015,
      resource_state: 1
    },
    name: "Morning Ride ",
    distance: 27901.9,
    moving_time: 5258,
    elapsed_time: 48229,
    total_elevation_gain: 122,
    type: "Ride",
    workout_type: null,
    id: 2890947230,
    external_id: "garmin_push_4284358755",
    upload_id: 3071712953,
    start_date: "2019-11-11T08:00:53Z",
    start_date_local: "2019-11-11T08:00:53Z",
    timezone: "(GMT+00:00) Europe/London",
    utc_offset: 0,
    start_latlng: [51.45, -0.04],
    end_latlng: [51.45, -0.04],
    location_city: null,
    location_state: null,
    location_country: null,
    start_latitude: 51.45,
    start_longitude: -0.04,
    achievement_count: 19,
    kudos_count: 0,
    comment_count: 0,
    athlete_count: 1,
    photo_count: 0,
    map: {
      id: "a2890947230",
      summary_polyline:
        "ym_yHfqFJPPtBm@n@wBz@gBsBsAeAwAk@iC?aEr@k@t@U?uAdI{IiGa@`A}ArIu@|ByFnLgBpJ{E`IBhAxBlFSj@kDlF^nSsAxIaEzPsAzEcDpJuBbEcEnJu@v@aLdFUlBkDe@eB_A_Be@i@^iB`D_BxAcNrIeDtCcAL]WkB?yDr@GLAjD[vD{BtO]nDMjD?rGsCz@}DvCqHjNe@jAe@dDoArOWtAk@PoBKyINgPpCIJBbArAvGqBx@eBvAaI|CwPzIsL`JoFfDa@g@Cy@SFyArBoAGoBd@ONShCc@nAg@IShAUGe@w@_CeBoB_DaBiDuBcGoCuFc@j@}@pCkFnRaAnCk@l@}@kByCaKkDqCuEsCaB{AuDoE{AgAi@}AoAqBuCgCaEWmIoBsCgA{@kAaBY{KzH}AzA]h@Id@_GvCaKsDkAGsBgB_Dg@kB_AsAWe@~Bu@~Aa@I_@iCWD{EkGKkAzAHLeFfAcDViBj@CR[l@kALcAcHmBnAAeDuDI_@fAsBSkB|AFtA{DCw@K}@`@iFMkBk@yB^sBRkEM_IdEL^mBD}AW_CkDBKm@I{HbAwDT_@j@kCOkIE}HDoFIgA~E_Cx@AzS{COSrRyBzC}@@yZVkDHmJZyAGsDgAePOoHe@uFU}KNyCGsDSiBx@cAToAFmAi@}Bx@sC\\_@L}@f@{AXiGr@]dBT^qAxAkMN{@l@uAx@mNKmAkBiHe@gCMaDRyCM{Cn@}AN{AVw@]bABv@hCtBdDd@tBDp@UEqJaEo@o@mBx@wKf@iDJMCiAL_CVMFc@x@N]bCE[`A_Bf@uAR{DRAFe@VJLd@|AZfGFMNMvEqGbAQ`A?x@YlBMbCd@`EhDfEaB~InHdMFmBu@sBDIp@AnDxArCKz@ZXRS|Ac@z@iFwDAgIvDbAdB~@MiBzBhAm@gATOAMpKfApBkA`CA|CnAxBkAfANbAe@b@s@tEa@`CoCzGQpA]|FeDbDiDzBsDxC_JjAcCtA_EfD}MRoCD_H]gJgAqL|@aAxC{AlS|Bp@g@~@IfEd@FOeAeE`@cA~CeBdApER^x@Yj@NhFzEz@hA~@Uz@m@pEyDzAGdBrAjHlOz@~Cb@|DVh@jAlAzA`AXrAGrHi@pHq@lDkC|JIxE_@|EFfBfAApBg@dBeAj@ZtPdXXp@nBdBbo@h`@dClAvG_A|DZfBjA`DvDrIvGhHjEfJtG^DlE_AjB@rBX|B~AfApAhADrBoAc@gDo@`@",
      resource_state: 2
    },
    trainer: false,
    commute: false,
    manual: false,
    private: false,
    visibility: "everyone",
    flagged: false,
    gear_id: null,
    from_accepted_tag: false,
    upload_id_str: "3071712953",
    average_speed: 5.307,
    max_speed: 26.7,
    average_temp: 7,
    average_watts: 57.9,
    kilojoules: 304.6,
    device_watts: false,
    has_heartrate: false,
    heartrate_opt_out: false,
    display_hide_heartrate_option: false,
    elev_high: 10.8,
    elev_low: -43.2,
    pr_count: 7,
    total_photo_count: 0,
    has_kudoed: false
  }

const ActivityCard = () => {
  return (
    <div>
          <p>Av Speed:{activity.average_speed}</p>
          <p>Elapsed Time:{activity.elapsed_time}</p>
          <p>Max Speed:{activity.max_speed}</p>
          <p>Av Watts:{activity.average_watts}</p>
    </div>
  );
};

export default ActivityCard;
