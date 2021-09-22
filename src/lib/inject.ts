import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js'
import { DB } from '../db'

export default function inject<In, Out> (fn: (call: ServerUnaryCall<In, Out>, callback: sendUnaryData<Out>, database: DB) => any, database: DB) {
  return (call: ServerUnaryCall<In, Out>, callback: sendUnaryData<Object>) => fn(call, callback, database)
}
