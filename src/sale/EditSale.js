import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";

const URI = "https://app121-back-production.up.railway.app";

const CompEditSale = () => {
  const [recarga_plan, setRecarga] = useState("");
  const [dn, setDn] = useState("");
  const [dn_digitos, setDnDigitos] = useState("");
  const [fvc, setFvc] = useState("");
  const [nip, setNip] = useState("");
  const [vigencia, setVigencia] = useState("");
  const [nombres_cliente, setNombres] = useState("");
  const [apellido_pat_cliente, setApPat] = useState("");
  const [apellido_mat_cliente, setApMat] = useState("");
  const [curp, setCurp] = useState("");
  const [fec_nac, setFecNac] = useState("");
  const [tel_contacto, setTelContacto] = useState("");
  const [lugar_nac, setLugarNac] = useState("");
  const [email, setEmail] = useState("");
  const [codigo_postal, setCodigoPostal] = useState("");
  const [col_fracc, setColFracc] = useState("");
  const [cac_movi, setCacMovi] = useState("");
  const [user_login, setUSerLogin] = useState("");
  const [ejecutivo, setEjecutivo] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [rfc, setRfc] = useState("");
  const [calle, setCalle] = useState("");
  const [num_ext, setNumExt] = useState("");
  const [num_int, setNumInt] = useState("");
  const [entre_calles, setEntreCalles] = useState("");
  const [referencias, setReferencias] = useState("");
  const [del_mun, setDelMun] = useState("");
  const [estado, setEstado] = useState("");
  const [id_ine, setIdIne] = useState("");
  const [orden, setOrden] = useState("");
  const [validador, setValidador] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate()

  const {id} = useParams ();

  //procedimiento para actualizar
  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI+id, {
      recarga_plan: recarga_plan,
      dn: dn,
      dn_digitos: dn_digitos,
      fvc: fvc,
      nip: nip,
      vigencia: vigencia,
      nombres_cliente: nombres_cliente,
      apellido_pat_cliente: apellido_pat_cliente,
      apellido_mat_cliente: apellido_mat_cliente,
      curp: curp,
      fec_nac: fec_nac,
      tel_contacto: tel_contacto,
      lugar_nac: lugar_nac,
      email: email,
      codigo_postal: codigo_postal,
      col_fracc: col_fracc,
      cac_movi: cac_movi,
      user_login: user_login,
      ejecutivo: ejecutivo,
      supervisor: supervisor,
      rfc: rfc,
      calle: calle,
      num_ext: num_ext,
      num_int: num_int,
      entre_calles: entre_calles,
      referencias: referencias,
      del_mun: del_mun,
      estado: estado,
      id_ine: id_ine,
      orden: orden,
      validador: validador,
      status: status,
    })
    navigate('/');
  }
  const departamento = [
    {label: "Prepago", value: 'Prepago'},
    {label: "Validación", value: 'Validación'},
    {label: "Mesa de Control", value: 'Mesa De Control'},
    {label: "Ok", value:'OK'}
  ] 

  useEffect( ()=>{
    getSaleByID()
  },[]);

  const getSaleByID = async ()=>{
    const res = await axios.get(URI+id)
    setRecarga(res.data.recarga_plan);
    setDn(res.data.dn);
    setDnDigitos(res.data.dn_digitos);
    setFvc(res.data.fvc);
    setNip(res.data.nip);
    setVigencia (res.data.vigencia);
    setNombres(res.data.nombres_cliente);
    setApPat(res.data.apellido_pat_cliente);
    setApMat(res.data.apellido_mat_cliente);
    setCurp(res.data.curp);
    setFecNac(res.data.fec_nac);
    setTelContacto(res.data.tel_contacto);
    setLugarNac(res.data.lugar_nac);
    setEmail(res.data.email);
    setCodigoPostal(res.data.codigo_postal);
    setColFracc(res.data.col_fracc);
    setCacMovi(res.data.cac_movi);
    setUSerLogin(res.data.user_login);
    setEjecutivo(res.data.ejecutivo);
    setSupervisor(res.data.supervisor);
    setRfc(res.data.rfc);
    setCalle(res.data.calle);
    setNumExt(res.data.num_ext);
    setNumInt(res.data.num_int);
    setEntreCalles(res.data.entre_calles);
    setReferencias(res.data.referencias);
    setDelMun(res.data.del_mun);
    setEstado(res.data.estado);
    setIdIne(res.data.id_ine);
    setOrden(res.data.orden);
    setValidador(res.data.validador);
    setStatus(res.data.status);

  }

  const handleSelectChange= ({value}) =>{
    setStatus(value);
  }

  return (
    <div>
      <h3 className="mt-5">Editar Registro</h3>
      <form onSubmit={update}>
        <div className="mb-3 px-5">
          <label className="form-label">Recarga</label>
          <input
            value={recarga_plan}
            onChange={(e) => setRecarga(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">DN</label>
          <input
            maxLength={10}
            value={dn}
            onChange={(e) => setDn(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Últimos 4 dígitos</label>
          <input
            maxLength={4}
            value={dn_digitos}
            onChange={(e) => setDnDigitos(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">FVC</label>
          <input
            maxLength={10}
            value={fvc}
            onChange={(e) => setFvc(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">NIP</label>
          <input
            maxLength={4}
            value={nip}
            onChange={(e) => setNip(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Vigencia de NIP</label>
          <input
            maxLength={10}
            value={vigencia}
            onChange={(e) => setVigencia(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Nombres Del Cliente</label>
          <input
            value={nombres_cliente}
            onChange={(e) => setNombres(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Apellido Paterno</label>
          <input
            value={apellido_pat_cliente}
            onChange={(e) => setApPat(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Apellido Materno</label>
          <input
            value={apellido_mat_cliente}
            onChange={(e) => setApMat(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">CURP</label>
          <input
            maxLength={18}
            value={curp}
            onChange={(e) => setCurp(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Fecha De Nacimiento</label>
          <input
            maxLength={10}
            value={fec_nac}
            onChange={(e) => setFecNac(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Teléfono De Contacto</label>
          <input
            maxLength={10}
            value={tel_contacto}
            onChange={(e) => setTelContacto(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Lugar De Nacimiento</label>
          <input
            value={lugar_nac}
            onChange={(e) => setLugarNac(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Correo Eletrónico</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Código Postal</label>
          <input
            maxLength={5}
            value={codigo_postal}
            onChange={(e) => setCodigoPostal(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Colonia/Fraccionamiento</label>
          <input
            value={col_fracc}
            onChange={(e) => setColFracc(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Centro De Atención A Clientes</label>
          <input
            value={cac_movi}
            onChange={(e) => setCacMovi(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">User Login</label>
          <input
            value={user_login}
            onChange={(e) => setUSerLogin(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Ejecutivo</label>
          <input
            value={ejecutivo}
            onChange={(e) => setEjecutivo(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Supervisor</label>
          <input
            value={supervisor}
            onChange={(e) => setSupervisor(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">RFC</label>
          <input
            maxLength={13}
            value={rfc}
            onChange={(e) => setRfc(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Calle</label>
          <input
            value={calle}
            onChange={(e) => setCalle(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Número Exterior</label>
          <input
            value={num_ext}
            onChange={(e) => setNumExt(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Número Interior</label>
          <input
            value={num_int}
            onChange={(e) => setNumInt(e.target.value)}
            type="text"
            className="form-control"
          />{" "}
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Entre Calles</label>
          <input
            value={entre_calles}
            onChange={(e) => setEntreCalles(e.target.value)}
            type="text"
            className="form-control"
          />{" "}
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Referencias</label>
          <input
            value={referencias}
            onChange={(e) => setReferencias(e.target.value)}
            type="text"
            className="form-control"
          />{" "}
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Delegación/Municipio</label>
          <input
            value={del_mun}
            onChange={(e) => setDelMun(e.target.value)}
            type="text"
            className="form-control"
          />{" "}
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Estado</label>
          <input
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            type="text"
            className="form-control"
          />{" "}
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Id INE</label>
          <input
            value={id_ine}
            onChange={(e) => setIdIne(e.target.value)}
            type="text"
            className="form-control"
          />{" "}
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">Orden</label>
          <input
            maxLength={5}
            value={orden}
            onChange={(e) => setOrden(e.target.value)}
            type="text"
            className="form-control"
          />{" "}
        </div>

        <div className="mb-3 px-5">
          <label className="form-label">validador</label>
          <input
            
            value={validador}
            onChange={(e) => setValidador(e.target.value)}
            type="text"
            className="form-control"
          />{" "}
        </div>
        
        <div className="mb-3 px-5">
           
          <label className="form-label">Status</label>
          <Select
          options = {departamento}
          onChange={handleSelectChange}
          className="dropdown-item"
          ></Select>
        </div>

        <button type="submit" className="btn btn-primary">Guardar</button>

      </form>
    </div>
  );

}

export default CompEditSale;