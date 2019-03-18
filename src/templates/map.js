import React from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Polyline } from 'react-google-maps'

const Map = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDEuhZzcJkGnDp7K314W1kp88od-EYT490',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 39.718151, lng: -104.973139 }}>
    <Polyline path="iplqFfiz_SJCBOAWB[@uBHsFEu@DgDGmC?eBBq@Ac@F_AEgB?}ADgBAu@@sCEqB@KHEP?FE?GEs@FiCCi@Be@C_ADo@CSF_AA_@IWAOD{@EiAH_B?w@UEIO?WDS?}@Ha@Ci@EY?_D@i@EiA?_AF{BG}AB_@@{BEeD@m@BW?uBD[?w@Ci@Os@Gk@@GFMZSFM@IBm@AiCC[?]K{AFOBo@Fa@@a@GmA?o@F_@^]CBEK?o@IqAAs@F}C?}AEsADqACgBHoCKyB@y@JO@MIi@CeAFk@?w@Du@@{AEg@EmABiACuBDyAMsBAo@DeAAaAEq@HkAE_@?[HkBGwCFcABqAE{@Da@FORKNCrAAn@@x@E~A?XFJ?f@GPBRGJFFGFYIk@YeASiAGg@E}A?a@P_CA_@Mm@Bc@Hk@G[Hu@?g@Hk@NcDDU@qAAmAJYd@Qb@o@LWPq@X_@DaADW\\{@Za@F[Xg@?gBXa@b@ELIn@eAf@YLOZc@t@i@X_@VQJMPe@\\g@RK\\Kd@_@XeAF?NGNUt@k@NQJQRg@LGZa@r@s@LYLO^YXq@FEDAPg@BELAJGJQHYVYJGRUnAiAPc@r@y@j@_AFQt@g@h@k@l@aALOJWNM@QTQLYV[NGHIf@{@nAeCX_@JGHKJy@Bk@BG@{@AmAJu@DaA@{@EkB@}AJy@DEHo@VcAD[J[PaBj@cCRe@RSHc@`@kAD]Zq@F[LYBe@DSHQ^g@Nw@D{@Le@Fq@DSLYLIBIJg@@YXaAD_@Rg@\\eAN]T_ALWPcAb@sAFORUJc@Zs@Z}@l@s@Rs@X_@^[\\m@F[FK`@QXUHMTKx@m@rAy@VYXQVUn@Yl@i@HETE\\QVU\\c@d@U~@y@^OZg@bAy@XYNYf@i@Zi@RQFC\\[d@{AXm@LOj@}@JSJc@JS^_@L@BC^m@l@i@h@W\\UVK`@g@^m@X[^_Ad@k@Vo@Ru@R]NMT_ATa@Nc@V]^gAT[JYj@aADAF@FK\\qA`@u@T}@Xu@Zc@\\_ATg@J[\\WLWTq@Ze@LCHOJM^k@`@qADy@^s@Vm@NQLWDYNc@j@aAXkAr@iARu@Pa@VWPq@JOb@a@`@_ANm@VUj@u@JYfBiDPg@`AaBZWb@{Bh@q@L_@Pu@DIRQr@kBJKP]\\eBPe@f@WF?LEdAsAPIPWd@qAHe@Nm@@]BEZc@|@_AVc@VUvAwCTq@Zu@bAiBXcA\\i@Zq@t@eAZURUTKPSPINUVMLQHU^URUt@e@TY`@Yr@Yv@m@d@S^Wf@g@`@UVe@LKh@S\\INULc@^_@NSHEPA`@QZ[TQt@]TItAu@TQZMRORIf@]ZMNMdAi@hC{@ZGNIz@Kb@ADAFIFS?wBG_@?Gj@mAHIJARFL@^FPHT?TB\\QJAJDJRNDv@In@ObABvA_A\\k@jAcBjAsC\\kAJUTIP?\\b@v@\\LJNBNEDKCi@EMIMAGFc@Bo@DWLa@d@s@LWFc@PUH_@Ve@Be@FSR[\\y@f@m@MD_@`@w@nA]dA]~@WdAIPa@f@a@bA?XBXT`AA`@KZGBEAc@Q]G[YKCa@@c@TKNCL@\\EZ_@`AQR_@fAY^q@p@c@l@_@Xc@JUC[?iATYA[BG?OQWDM?KCWKUCOEk@@UDURD|@Ml@A|AEN]b@IBkAFa@F{@TuAh@cAb@{BrAeD`BgBbAiA|@u@x@[d@aA^yAnAq@`@i@P}@z@cBlA_@^m@`@gAhAYPq@v@}@t@_@h@w@zAQd@}@bB}@jB_@l@a@bAYh@_AjA{A`CWNIhAW|@Q`@Yf@iAvAe@`@UZoAjDMj@eAbBg@bAUl@Ox@Qr@}@~Aa@x@Sj@w@lAcAjB}@fAy@|AiA~Ae@|@St@mAlCa@p@IHODEDGd@cAtCGbAy@fBIXYf@g@nAOLGHu@bBe@l@m@pAu@pBOV[v@qAlCq@lACRGNsBnDm@tAgAvB]v@Yb@q@n@}AVQL]`@[LKj@m@|@a@fAk@z@}AxC{@rAsB|B{AlAs@^aA|@m@\\_BlAc@XQHy@p@SL_@Xw@f@aBpAe@d@aAjA]f@_B`DO^]`@e@nAu@pCUt@O|@W`@g@zAMj@It@c@~AOtAARWbAIPOr@kAtCa@bBWx@[l@KLOv@c@jASpAOjBOp@Wt@Ij@BfEEdB@f@Gp@?jADVNh@[fA{@dBi@lA{@dBQN_@NSRe@r@_@t@]^c@`@i@r@qC`EML_@XS^sA|AUNc@b@MRYr@i@l@OJe@p@u@`A[f@]\\i@ZIJKRUZYj@_@j@GFa@NOJ{@~@g@v@_Az@]d@MLe@ZSRe@t@IBa@DIFMVEXCxACZUd@i@t@Wh@OtAOl@KRc@f@W`@URWJIJAF@fACb@@dBKbAIh@OtBAd@Bf@Gp@HjBI~AIz@?XF~@b@hCRt@@VL|@E@GCUA{@H{@SU?iBHa@?cAFe@?QBOJKTE\\@zBKbABrAEtDBfBAlABtAC`BBdAAbDBpEDfBIpAFvBKjCDl@?xCC`@B|@A`BBjHEvEDdAI~@Ol@El@F|BKvCFh@ERFhECV[`@Gh@Hn@DvAGxBBvAE|JBnB?xDC`@DvACz@@jBA`ACZ@bGArEBfACl@BRXHBf@CrBGn@CpACTOVENDzCEp@@`BChB?zABhAC`BDbAEpB@f@?nBC`ABtBEtADxAEhCBvBC^" />
  </GoogleMap>
))

export { Map }
