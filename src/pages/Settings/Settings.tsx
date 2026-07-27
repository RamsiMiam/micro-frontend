import "./Settings.css";

import Card from "../../components/Card/Card";


function Settings() {

    return (

        <main className="settings-page">


            <Card title="MQTT">

                <div className="settings-field">

                    <label>
                        Broker
                    </label>

                    <input
                        type="text"
                        placeholder="mqtt://localhost"
                    />

                </div>


                <div className="settings-field">

                    <label>
                        Port
                    </label>

                    <input
                        type="number"
                        placeholder="1883"
                    />

                </div>


                <div className="settings-field">

                    <label>
                        Username
                    </label>

                    <input
                        type="text"
                        placeholder="username"
                    />

                </div>


                <div className="settings-field">

                    <label>
                        Password
                    </label>

                    <input
                        type="password"
                        placeholder="********"
                    />

                </div>


                <div className="settings-checkbox">

                    <input
                        type="checkbox"
                        id="mqtt-tls"
                    />

                    <label htmlFor="mqtt-tls">
                        Enable TLS
                    </label>

                </div>


            </Card>



            <Card title="Application">

                <div className="settings-field">

                    <label>
                        Dashboard Name
                    </label>

                    <input
                        type="text"
                        placeholder="Robot Control Center"
                    />

                </div>


                <div className="settings-field">

                    <label>
                        Theme
                    </label>

                    <select>

                        <option>
                            Dark
                        </option>

                    </select>

                </div>


            </Card>



            <button className="save-button">
                Save Changes
            </button>


        </main>

    );
}


export default Settings;