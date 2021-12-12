import React,{useState} from 'react';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
const BuilderInput = () => {
    // state out of for body
    const [bodySegment, setBodySegment] = useState({
        WoodSelection:"",
        BodyConstruction:"",
        BodyShapes:"",
        BodyCurves:"",
        BodyCavities:"",
        BodyBinding:"",
    })
    // state Body Ended

    // state out for neck
    const [neck, setNeck] = useState({
        NeckWoodSelection:"",
        NeckConstruction:"",
        Headstocks:"",
        HeadstockAngles:"",
        NeckTaping:"",
        TrussRod:"",
        NeckAssembly:"",
    })
    // state end for neck

    // state for freat board under here
    const [freatBoard, setFreatBoard] = useState({
        FretWoodSelection:"",
        ScaleLenths:"",
        FretNumbers:"",
        FretboardRadius:"",
        Inlays:"",
        InlayMaterial:"",
        BodyNeckBinding:"",
        Fretwires:""
    })
    // state for freat board end here

    // state for pain under here
    const [paint, setPaint] = useState({
        Paint:"",
        Finish:"",
        CustomShopFinish:"",

    })
    // state for paint end here

    // state for hardware under here
    const [hardWare, setHardware] = useState({
        TuningKeys:"",
        Nut:"",
        Bridges:"",
        Pickups:"",
        Potentiometers:"",
        SelectorSwitches:"",
        Knobs:"",
        OutputJacks:"",
        StrapPins:"",
        Pickgaurds:""
    });
    // state for hardware end here

    // state for Accessories under here
    const [Accessories, setAccessories] = useState({
        CustomGigBag:"",
        CustomCase:"",
        Strap:"",
        picks:""
    });
    // state for Accessories end here

    // state for contract under here
    const [contract, setContract] = useState({
        fullName:"",
        Phone:"",
        email:"",
        socialId:"",
        SpecialNote:""
    });
    // state for contract end here

    // bodySegment handler function start under here
    const handleOnChangeBodySegment = (e) => {
        const newBody = {...bodySegment}
        newBody[e.target.name] = e.target.value;
        setBodySegment(newBody)
        console.log(newBody)
    }
    // body segment ended here

    // neck sengment function start under here
    const handleOnChangeNeckSegment = (e) => {
        const newNeck = {...neck}
        newNeck[e.target.name] = e.target.value;
        setNeck(newNeck)
        console.log(newNeck)
    }

    // handler function for freatBoard reporting start under here
    const handleFreatBoardOnChange = (e) => {
        const newNeck = {...freatBoard}
        newNeck[e.target.name] = e.target.value;
        setFreatBoard(newNeck)
        console.log(newNeck)
    }
    // handler function for freateBoard reporting End Here

    // handler funtion for paint start here
    const handlerOnChangePaint = (e) => {
        const newNeck = {...paint}
        newNeck[e.target.name] = e.target.value;
        setPaint(newNeck)
        console.log(newNeck)
    }
    // handler function for paint end here


    // handler function for hardware start here
    const handleHardwareOnChange = (e) => {
        const newNeck = {...hardWare}
        newNeck[e.target.name] = e.target.value;
        setHardware(newNeck)
        console.log(newNeck)
    }
    // handler function for hardware end here

    // handler function for Accessories start here
    const handleOnchangeAccessories = (e) => {
        const newNeck = {...Accessories}
        newNeck[e.target.name] = e.target.value;
        setAccessories(newNeck)
        console.log(newNeck)
    };
    // handler function for Accessories end here

    // handler function for Contract info
    const handlerContractOnChange = (e) => {
        const contractInfo = {...contract};
        contractInfo[e.target.name] = e.target.value;
        setContract(contractInfo);
        console.log(contractInfo);
    }
    const handleOnSubmit = (e) => {
        const formData = new FormData()
        formData.append('WoodSelection', bodySegment.WoodSelection);
        formData.append('BodyConstruction', bodySegment.BodyConstruction);
        formData.append('BodyShapes', bodySegment.BodyShapes);
        formData.append('BodyCurves', bodySegment.BodyCurves);
        formData.append('BodyCavities', bodySegment.BodyCavities);
        formData.append('BodyBinding', bodySegment.BodyBinding);
        formData.append('NeckWoodSelection', neck.NeckWoodSelection);
        formData.append('NeckConstruction', neck.NeckConstruction);
        formData.append('Headstocks', neck.Headstocks);
        formData.append('HeadstockAngles', neck.HeadstockAngles);
        formData.append('NeckTaping', neck.NeckTaping);
        formData.append('TrussRod', neck.TrussRod);
        formData.append('NeckAssembly', neck.NeckAssembly);


        formData.append('FretWoodSelection', freatBoard.FretWoodSelection);
        formData.append('ScaleLenths', freatBoard.ScaleLenths);
        formData.append('FretNumbers', freatBoard.FretNumbers);
        formData.append('FretboardRadius', freatBoard.FretboardRadius);
        formData.append('Inlays', freatBoard.Inlays);
        formData.append('InlayMaterial', freatBoard.InlayMaterial);
        formData.append('BodyNeckBinding', freatBoard.BodyNeckBinding);
        formData.append('Fretwires', freatBoard.Fretwires);

        formData.append('Paint', paint.Paint);
        formData.append('Finish', paint.Finish);
        formData.append('CustomShopFinish', paint.CustomShopFinish);

        formData.append('TuningKeys', hardWare.TuningKeys);
        formData.append('Nut', hardWare.Nut);
        formData.append('Bridges', hardWare.Bridges);
        formData.append('Pickups', hardWare.Pickups);
        formData.append('Potentiometers', hardWare.Potentiometers);
        formData.append('SelectorSwitches', hardWare.SelectorSwitches);
        formData.append('Knobs', hardWare.Knobs);
        formData.append('OutputJacks', hardWare.OutputJacks);
        formData.append('StrapPins', hardWare.StrapPins);
        formData.append('Pickgaurds', hardWare.Pickgaurds);
        formData.append('CustomGigBag', Accessories.CustomGigBag);
        formData.append('CustomCase', Accessories.CustomCase);
        formData.append('Strap', Accessories.Strap);
        formData.append('picks', Accessories.picks);
        formData.append('fullName', contract.fullName);
        formData.append('Phone', contract.Phone);
        formData.append('email', contract.email);
        formData.append('socialId', contract.socialId);
        formData.append('SpecialNote', contract.SpecialNote);

        fetch('http://localhost:5000/builder/', {
            method: 'POST',
            body: formData
          })
          .then(response => response.json())
         .then(data => {
            console.log(data)
         })
         .catch(error => {
            console.error(error)
         })

        e.preventDefault() 
    }

    return (
        <form className="BuilderInput" onSubmit={handleOnSubmit}>

<h1 className="first-h1">Let's Start</h1>
            <p className="first-p"> Choose Your Guitar Parts</p>

            <div class="container">
            <div className="row">
            <div class="col-md-6">
                    <div class="row">
                        <h1 className="second-h1" >Body</h1>
                        <div class="line">
                            <label for="Wood-Selection"><h6 class="head">Wood Selection</h6></label>
                            <select class="Selection" name="WoodSelection"onChange={handleOnChangeBodySegment}>
                                <option value="mohogany">Mahogany (Red HardWood) - Heavy</option>
                                <option value="gmelina">Gmelina (White SoftWood) - Light</option>
                                <option value="acacia">Acacia (Dark Hardwood) - Medium</option>
                                <option value="rosewood">RoseWood (Red/Dark Hardwood) - Medium</option>
                                <option value="garjan">Garjan (Red Hardwood) (Light)</option>
                                <option value="pine">Pine (White Softwood) - Light</option>
                                <option value="alder">Alder (White Softwood) - Light</option>
                                <option value="ash">Ash (White Hardwood) - LightAudi</option>
                                <option value="oak">Oak (White Hardwood) - Light</option>
                                <option value="maple">Maple (White Hardwood) - Light</option>
                                <option value="teak">Teak (Mixed Hardwood) - Heavy</option>
                                <option value="siris">Siris (Mixed Hardwood) - Heavy</option>
                                <option value="chapalish">Chapalish (White hardwood) - Light</option>
                                <option value="shilkoroi">Shilkoroi (Mixed Hardwood) - Medium</option>
                                <option value="shegun">Shegun (Mixed Hardwood) - Heavy</option>
                                <option value="koa">Koa (Dark Harwood) - LightAudi</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Body-Construction"><h6 class="head">Body Construction</h6></label>
                            <select class="Selection" name="BodyConstruction"  onChange={handleOnChangeBodySegment}>
                                <option value="pcs-1">1 pcs Body</option>
                                <option value="pcs-2">2 pcs Body </option>
                                <option value="pcs-3">3 pcs Body</option>
                                <option value="pcs-3+">3+ pcs Body</option>
                                <option value="custom">Custom Construction</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Body-Shapes"><h6 class="head">Body Shapes</h6></label>
                            <select class="Selection" name="BodyShapes"  onChange={handleOnChangeBodySegment}>
                                <option value="s-cutway">Single Cutway </option>
                                <option value="d-cutway">Double Cutway </option>
                                <option value="telecaster">Telecaster Style</option>
                                <option value="stratocaster">Stratocaster Style</option>
                                <option value="superstrat">SuperStrat Style</option>
                                <option value="lespaul">Classic LesPaul Style</option>
                                <option value="flying">Classic Flying V</option>
                                <option value="explorer">Classic Explorer</option>
                                <option value="sg">Classic SG</option>
                                <option value="prs">PRS Style</option>
                                <option value="jaguar">Jaguar Style</option>
                                <option value="hollowbody">Hollowbody</option>
                                <option value="m-superstrat">Mordern SuperStrat </option>
                                <option value="m-lespaul">Mordern LesPaul Style</option>
                                <option value="m-v-v2">Mordern V-V2</option>
                                <option value="m-explorer">Mordern Explorer</option>
                                <option value="precission">Precission style (Bass)</option>
                                <option value="d-cut">Mordern Double Cut Style (Bass)</option>
                                <option value="warwick">Warwick Style (Bass)</option>
                                <option value="custom">Custom Shape</option>                                   
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Body-Curves"><h6 class="head">Body Curves</h6></label>
                            <select class="Selection" name="BodyCurves"  onChange={handleOnChangeBodySegment}>
                                <option value="c-armrest">Custom Armrest</option>
                                <option value="deep">Deep Bellycut</option>
                                <option value="c-edges">Custom Edges</option>
                                <option value="archtop">Archtop</option>
                                <option value="engraved">Engraved Designs</option>
                                <option value="extreme">Extreme Curves</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Body-Cavities"><h6 class="head "  >Body Cavities</h6></label>
                            <select class="Selection" name="BodyCavities" onChange={handleOnChangeBodySegment}>
                                <option value="pickgaurd">Pickgaurd Cavity</option>
                                <option value="SemiFloatingBridgeCavity">Semi Floating Bridge Cavity</option>
                                <option value="f-bridge">Floating Bridge Cavity</option>
                                <option value="single-coil">Pickup Cavities - SingleCoil</option>
                                <option value="humbucker">Pickup Cavities - Humbucker</option>
                                <option value="hollow-weight">Hollow/Weight Reducing Cavities</option>
                                <option value="custom">Custom Electronics Cavity</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Body-Binding"><h6 class="head">Body Construction</h6></label>
                            <select class="Selection" name="BodyBinding"  onChange={handleOnChangeBodySegment}>
                                <option value="3mm">1 ply bind (Body) 3mm</option>
                                <option value="6mm">3 ply bind (Body) 6mm</option>
                                <option value="10mm">5 ply bind (Body) 10mm</option>
                                <option value="custom">Custom Material Binding</option>                                    
                            </select>
                        </div>
                    </div> 
                         
                </div>
                
                
                <div className="col-md-6">

                </div>
            </div>
            

               <div className='row'>
               <div class="col-6">
                    <div class="row">
                        <h1 className="second-h1" >Neck</h1>
                        <div class="line">
                            <label for="Wood-Selection"><h6 class="head">Wood Selection</h6></label>
                            <select class="Selection" name="WoodSelection" onChange={handleOnChangeNeckSegment}>
                                <option value="mahogany">Mahogany (Red HardWood) - Medium</option>
                                <option value="acacia">Acacia (Dark Hardwood) - Medium</option>
                                <option value="garjan">Garjan (Red Hardwood) - Light</option>
                                <option value="maple">Maple (White Hardwood) - Light</option>
                                <option value="shilkoroi">Shilkoroi (Mixed Hardwood) - Medium</option>
                                <option value="koa">Koa (Dark Harwood) - Light</option>                                    
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Neck-Construction"><h6 class="head">Neck Construction</h6></label>
                            <select class="Selection" name="NeckConstruction" onChange={handleOnChangeNeckSegment}>
                                <option value="1pcs">1 pcs Neck</option>
                                <option value="3ply">3 ply Neck</option>
                                <option value="5ply">5 ply Body</option>
                                <option value="custom">Custom Construction</option>                                   
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Headstocks"><h6 class="head">Headstocks</h6></label>
                            <select class="Selection" name="Headstocks" onChange={handleOnChangeNeckSegment}>
                                <option value="tele">Single Row (Tele/Strat Style)</option>
                                <option value="pointed">Single Row (Pointed)</option>
                                <option value="prs">Dual Row (LP/PRS Style)</option>
                                <option value="musicman">Dual Row (Musicman Style)</option>
                                <option value="7-8">Dual Row (7/8 String)</option>
                                <option value="custom">Custom Head Design</option>                              
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Headstock-Angles"><h6 class="head">Headstock Angles</h6></label>
                                <select class="Selection" name="HeadstockAngles" onChange={handleOnChangeNeckSegment}>
                                    <option value="straight">Straight</option>
                                    <option value="6d">6 Degree</option>
                                    <option value="12d">12 Degree</option>                                   
                                </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Neck-Taping"><h6 class="head">Neck Taping</h6></label>
                                <select class="Selection" name="NeckTaping" onChange={handleOnChangeNeckSegment}>
                                    <option value="slim">Slim Taped (C)</option>
                                    <option value="ragular-c">Regular Taped (C)</option>
                                    <option value="slim">Extra Slim (D)</option>
                                    <option value="ragular-d">Regular Taped (D)</option>
                                    <option value="soft">Soft (V) Taped</option>
                                    <option value="custom">Custom Taping</option>                                   
                                </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Truss-Rod"><h6 class="head">Truss Rod</h6></label>
                            <select class="Selection" name="TrussRod" onChange={handleOnChangeNeckSegment}>
                                <option value="standard">Standard Truss Rod</option>
                                <option value="adjustment">Adjustment on Hill</option>
                                <option value="dual">Dual 3mm Reinforcement</option>
                                <option value="stainless">Stainless Steel Rod</option>
                                <option value="c-setup">Custom Setup</option>
                                <option value="c-cover">Custom Cover Plate</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Neck-Assembly"><h6 class="head">Neck Assembly</h6></label>
                            <select class="Selection" name="NeckAssembly" onChange={handleOnChangeNeckSegment}>
                                <option value="bolt">Bolt-On Construction</option>
                                <option value="dovetail">Dovetail Joint Construction</option>
                                <option value="sami">Semi-though Body Construction</option>
                                <option value="through">Through Body Construction</option>
                                <option value="one">One Piece Guitar Construction</option>                                   
                            </select>
                        </div>
                    </div>            
                </div>
               </div>


                <div className="row">
                <div class="col-md-6">
                    <div class="row">
                        <h1 className="second-h1" >Fret Board</h1>
                        <div class="line">
                            <label for="Wood-Selection"><h6 class="head">Wood Selection</h6></label>
                            <select class="Selection" name="WoodSelection" onChange={handleFreatBoardOnChange}>
                                <option value="buck">Buck Maple - White</option>
                                <option value="acacia">Acacia - Light Brown</option>
                                <option value="siris">Siris - White/Dark Mixed Grain</option>
                                <option value="rosewood">RoseWood - Red/Dark Brown</option>
                                <option value="ebony">Ebony - Black</option>                              
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Scale-Lenths"><h6 class="head">Scale Lenths<p>(Guitars & Basses)</p></h6></label>
                            <select class="Selection" name="ScaleLenths" onChange={handleFreatBoardOnChange}>
                                <option value="22">22</option>
                                <option value="22.5">22.5</option>
                                <option value="22.75">22.75</option>
                                <option value="24">24</option>
                                <option value="24.5">24.5</option>
                                <option value="24.75">24.75</option>
                                <option value="25">25</option>
                                <option value="25.5">25.5</option>
                                <option value="26.5">26.5</option>
                                <option value="27">27</option>
                                <option value="27.5">27.5</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="32">32</option>
                                <option value="34">34</option>
                                <option value="36">36</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Fret-Numbers"><h6 class="head">Fret Numbers</h6></label>
                            <select class="Selection" name="FretNumbers" onChange={handleFreatBoardOnChange}>
                                <option value="20">20</option>
                                <option value="22">22</option>
                                <option value="24">24</option>
                                <option value="30">30</option>
                                <option value="custom">Custom Numbered Frets</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Fretboard-Radius"><h6 class="head">Fretboard Radius</h6></label>
                            <select class="Selection" name="FretboardRadius" onChange={handleFreatBoardOnChange}>
                                <option value="7.25">7.25''</option>
                                <option value="9.50">9.50''</option>
                                <option value="10.50">10.50''</option>
                                <option value="12">12.00''</option>
                                <option value="14.5">14.50''</option>
                                <option value="16">16.00''</option>
                                <option value="flat">Flat</option>
                                <option value="compound">Compound Radius</option>
                                <option value="custom">Custom Radius</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Inlays"><h6 class="head">Inlays</h6></label>
                            <select class="Selection" name="Inlays" onChange={handleFreatBoardOnChange}>
                                <option value="inlaya">No Inlays</option>
                                <option value="d-inlays">Dot Inlays </option>
                                <option value="f-inlays">12th Fret Inlays</option>
                                <option value="t-inlays">Block/ Trapiziod Inlays</option>
                                <option value="custom">Custom Inlay</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Inlay-Material"><h6 class="head">Inlay Material</h6></label>
                            <select class="Selection" name="InlayMaterial" onChange={handleFreatBoardOnChange}>
                                <option value="mother">Mother of Pearl</option>
                                <option value="tortoise">Tortoise Shell</option>
                                <option value="Steel">Steel</option>
                                <option value="Acrylic">Acrylic</option>
                                <option value="Wood">Wood</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Body+Neck Binding"><h6 class="head">Body+Neck Binding</h6></label>
                            <select class="Selection" name="BodyNeckBinding" onChange={handleFreatBoardOnChange}>
                                <option value="3mm">1 ply bind (Neck) 3 mm</option>
                                <option value="6mm">3 ply bind (Neck) 6mm</option>
                                <option value="custom">Custom Material Binding</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Fretwires"><h6 class="head">Fretwires</h6></label>
                            <select class="Selection" name="Fretwires"  onChange={handleFreatBoardOnChange}>                              
                                <option value="regular">Regular .7</option>
                                <option value="jumbo-9">Jumbo .9</option>
                                <option value="jumbo-11">Extra Jumbo .11</option>
                                <option value="steel">Stainless Steel .11</option>
                            </select>
                        </div>
                    </div>
                </div>
                </div>


                <div className="row">
                <div class="col-md-6">
                    <div class="row">
                        <h1 className="second-h1" >Paint & Finishes</h1>
                        <div class="line">
                            <label for="Paint"><h6 class="head">Paint</h6></label>
                            <select class="Selection" name="Paint" onChange={handlerOnChangePaint}>
                                <option value="solid">Solid Color</option>
                                <option value="through">See through Color</option>
                                <option value="natural">Natural Wood</option>
                                <option value="2-tone">2 tone Burst</option>
                                <option value="3-tone">3 tone Burst</option>
                                <option value="sparkle">Solid Sparkle Color</option>
                                <option value="satin">Satin Dye</option>
                                <option value="burnt">Burnt</option>
                                <option value="custom">Custom Color</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Finish"><h6 class="head">Finish</h6></label>
                            <select class="Selection" name="Finish" onChange={handlerOnChangePaint}>
                                <option value="semi-gloss">Semi-Gloss Hard Lacquer Finish</option>
                                <option value="hi-gloss">Super Hi-Gloss Lacquer Finish</option>
                                <option value="satin">Satin Lacquer Finsish</option>
                                <option value="oil">Oil Finish</option>
                                <option value="french">French Polish</option>
                                <option value="nitro">Classic Nitro Finish</option>
                                <option value="unfinished">Unfinished</option>
                            </select>
                        </div>
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Custom Shop Finish"><h6 class="head">Custom Shop Finish</h6></label>
                            <select class="Selection" name="CustomShopFinish" onChange={handlerOnChangePaint}>
                                <option value="artworks">Artworks/ Paintings</option>
                                <option value="artist">Artist Inspired</option>
                                <option value="extreme">Extreme Finishes</option>
                            </select>
                        </div>
                    </div>
                </div>
                </div>


                <div className="row">
                <div class="col-md-6">
                    <div class="row">
                        <h1 className="second-h1" >Hardware</h1>
                        <div class="line">
                            <label for="Tuning-Keys"><h6 class="head">Tuning Keys</h6></label>
                            <select class="Selection" name="TuningKeys" onChange={handleHardwareOnChange}> 
                                <option value="fender">6 string Fender Style</option>
                                <option value="gibson">6 string Gibson Style</option>
                                <option value="6-mordern">6 String Mordern Style</option>
                                <option value="7-mordern">7/8 String Mordern Style</option>
                                <option value="classic">4/5 String Classic Style (Bass)</option>
                                <option value="mordern">4/5 String Mordern Style (Bass)</option>
                                <option value="branded">Branded Keys</option>
                            </select>
                        </div>

                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Nut"><h6 class="head">Nut</h6></label>
                            <select class="Selection" name="Nut" onChange={handleHardwareOnChange}> 
                                <option value="bone">Bone Nut</option>
                                <option value="bronze">Bronze Nut</option>
                                <option value="graphite">Graphite Nut</option>
                                <option value="steel">Steel Nut</option>
                                <option value="plastic">Plastic Nut</option>
                                <option value="custom">Custom Material Nut</option>
                            </select>
                        </div>

                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Bridges"><h6 class="head">Bridges</h6></label>
                            <select class="Selection" name="Bridges" onChange={handleHardwareOnChange}> 
                                <option value="tune">Tune O Matic (LP Style)</option>
                                <option value="wraparound">Wraparound (PRS Style)</option>
                                <option value="hardtail">Hardtail (Hipshot Style)</option>
                                <option value="semi-floating">Semi-Floating (Fender/Mordern Style)</option>
                                <option value="floating">Floating (FR style)</option>
                                <option value="floyd">Floyd Rose Special</option>
                                <option value="bigsby">Bigsby (Classic Tremolo)</option>
                                <option value="saddles">Single Saddles</option>
                                <option value="4-string">4 String Bass</option>
                                <option value="5-string">5 String Bass</option>
                                <option value="6-string">6 String Bass</option>
                            </select>
                        </div>

                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Pickups"><h6 class="head">Pickups</h6></label>
                            <select class="Selection" name="Pickups" onChange={handleHardwareOnChange}>
                                <option value="coil">Single Coil</option>
                                <option value="humbucker">Single Humbucker</option>
                                <option value="hh-setup">HH Setup</option>
                                <option value="hsh-setup">HSH Setup</option>
                                <option value="hss-setup">HSS Setup</option>
                                <option value="sss">SSS Setup</option>
                                <option value="ss">SS Setup (Lipstick+Single)</option>
                                <option value="soapbar">Soapbar (HH Setup)</option>
                                <option value="emg">EMG Setup (Active)</option>
                                <option value="seymore">Seymore Duncan '59 (SH-2N)</option>
                                <option value="bass-single">Bass Single</option>
                                <option value="humbucker">Bass Humbucker</option>
                                <option value="seymore">Seymore Duncan</option>
                                <option value="fishman">FishMan</option>
                                <option value="bareknuckle">Bareknuckle</option>
                                <option value="dmarzio">D'marzio</option>
                                <option value="cusotm">Custom Brands</option>
                            </select>
                        </div>

                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Potentiometers"><h6 class="head">Potentiometers</h6></label>
                            <select class="Selection" name="Potentiometers" onChange={handleHardwareOnChange}> 
                                <option value="250k">250k (Regular)</option>
                                <option value="500k">500k (Regular)</option>
                                <option value="cts-250k">CTS 250k</option>
                                <option value="cts-500k">CTS 500k</option>
                                <option value="c-capcitor">Custom Capacitor</option>
                                <option value="cavity">Cavity Shielding</option>
                                <option value="quality">Best quality wires</option>
                                <option value="push/pull">Push/Pull</option>
                                <option value="coil">Coil Split</option>
                                <option value="kill">Kill Switch</option>
                                <option value="c-electronics">Custom Electronics</option>
                            </select>
                        </div>

                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Selector-Switches"><h6 class="head">Selector Switches</h6></label>
                            <select class="Selection" name="SelectorSwitches" onChange={handleHardwareOnChange}> 
                                <option value="3-toggle">3 way Toggle</option>
                                <option value="3-linear">3 way Linear</option>
                                <option value="5-linear">5 way Linear</option>
                                <option value="branded">Branded Switch</option>
                            </select>
                        </div>

                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Knobs"><h6 class="head">Knobs</h6></label>
                            <select class="Selection" name="Knobs" onChange={handleHardwareOnChange}>                                 
                                <option value="metal">Metal Knobs</option>
                                <option value="clear">LP Style Clear Hat</option>
                                <option value="fender">Fender Style Hat</option>
                                <option value="dual">Dual Knob</option>
                                <option value="wooden">Wooden Knobs</option>
                                <option value="custom">Custom Knobs</option>
                            </select>
                        </div>

                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Output-Jacks"><h6 class="head">Output Jacks</h6></label>
                            <select class="Selection" name="OutputJacks" onChange={handleHardwareOnChange}> 
                                <option value="square">Square Plated (Regular)</option>
                                <option value="endpin">Endpin/ Cylindic</option>
                                <option value="mounted">Top Mounted</option>
                            </select>
                        </div>

                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Strap-Pins"><h6 class="head">Strap Pins</h6></label>
                            <select class="Selection" name="StrapPins" onChange={handleHardwareOnChange}> 
                                <option value="regular">Regular Pins</option>
                                <option value="locking">Locking Pins</option>
                                <option value="custom">Custom/Branded Pins</option>
                            </select>
                        </div>

                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Pickgaurds"><h6 class="head">Pickgaurds</h6></label>
                            <select class="Selection" name="Pickgaurds" onChange={handleHardwareOnChange}> 
                                <option value="materialyrn">Custom Material</option>
                                <option value="shape">Custom Shape</option>
                                <option value="finish">Custom Finish</option>
                                <option value="strat">Regular Strat Style</option>
                                <option value="tele">Regular Tele Style</option>
                                <option value="lp">Regular LP Style</option>
                                <option value="v-style">Regular V Style</option>
                            </select>
                        </div>
                    </div>
                </div>
                </div>

               <div className="row">
               <div class="col-md-6">
                    <div class="row">
                    <h1 className="second-h1" >Accessories</h1>
                                              
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Custom-Gig-Bag"><h6 class="head">Custom Gig Bag</h6></label>
                            <select class="Selection" name="CustomGigBag" onChange={handleOnchangeAccessories}>
                               
                               <option value="fabric">Fabric</option>
                               <option value="leather"> Leather</option>
                               <option value="artificial">Artificial Leather</option>
                               <option value="padding 5 inch"> Padding 5 inch</option>
                               <option value="padding 1 inch"> Padding 1 inch</option>
                               
                                
                            
                                
                               
                            </select>
                        </div>                        
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Custom-Case"><h6 class="head">Custom Case</h6></label>
                            <select class="Selection" name="CustomCase" onChange={handleOnchangeAccessories}>

                            <option value="artifical">Wrapping Material Artifical Leather</option>
                            <option value="leather">Wrapping Material Leather</option>
                            <option value="blanket">Regular Padding Blanket</option>
                            <option value="soft-padding">Special Soft Fur Padding</option>
                            <option value="regular-hardware">Regular Hardware</option>
                            <option value="durable-hardware">Extra Durable Hardware</option>
                            <option value="custom-color">Custom Color</option>
                                <option value="custom-design">Custom Design/Initial/Branding</option> 



                                
                                
            
                                

                                                                                            
                            </select>
                        </div>                        
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Strap"><h6 class="head">Strap</h6></label>

                            
                            <select class="Selection" name="Strap" onChange={handleOnchangeAccessories}>
                            <option value="classic">Classic Custom Ingraved Leather Strap</option>
                                <option value="mordern">Mordern Custom Ingraved Leather Strap</option>
                                <option value="printed">Printed/Ingraved Custom Nylon strap</option>
                                <option value="custom">Custom Materials/ Color</option>   
                                 

                            </select>
                        </div>                        
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Strap"><h6 class="head">Picks</h6></label>

                            
                            <select class="Selection" name="Picks" onChange={handleOnchangeAccessories}>
                            <option value="custom">Custom Signatured Wooden Picks</option> 


                            </select>
                        </div>                        
                    </div>
                </div>
                
               </div>
               <div className="row">
               <div class="col-md-6">
                    <div class="row">
                    <h1 className="second-h1" >Contract Information</h1>
                        <div class="line">
                            <label for="Neck-Construction"><h6 class="head">Full Name</h6></label>
                            <input type="text" class="Selection" placeholder="Enter your Full Name" name="fullName" onChange={handlerContractOnChange}/>
                                
                        </div>                        
                    </div>
                    <div class="row">
                        <div class="line">
                            <label for="Custom-Gig-Bag"><h6 class="head">Phone</h6></label>
                            <input type="text" class="Selection" placeholder="Enter your Phone Number" name="Phone" onChange={handlerContractOnChange}/>
                        </div>                        
                    </div>
                    <div class="row">
                        <div class="line">
                        <label for="Custom-Gig-Bag"><h6 class="head">Email</h6></label>
                            <input type="text" class="Selection" placeholder="Enter your Email" name="email" onChange={handlerContractOnChange}/>
                        </div>                        
                    </div>
                    <div class="row">
                        <div class="line">
                        <label for="Custom-Gig-Bag"><h6 class="head">Social ID</h6></label>
                            <input type="text" class="Selection" placeholder="Enter your Social Id Link" name="socialId" onChange={handlerContractOnChange}/>
                        </div>                        
                    </div>
                </div>
                   <div className="col-md-6 d-flex align-items-center" style={{marginTop:'7%', paddingLeft:'10%'}}>
                
                    <div>
                    <label for="Strap"><h6 class="head">Special Note</h6></label>
                    <textarea className="textarea"  id="" cols="50" rows="15" name="SpecialNote" onChange={handlerContractOnChange}></textarea>
                    </div>
                </div>
               </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-12 d-flex justify-content-center">
                <button className="btn btn-danger Selection" style={{background:'#a3102d', border:'none'}} type='submit'>Submit</button>
                
                </div>
                <p className="text-center mt-3">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur <br />
There is no one who loves pain itself, who seeks after it and wants to have it, simply</p>
            </div>
        </form>
    );
};

export default BuilderInput;